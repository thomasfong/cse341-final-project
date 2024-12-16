const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['grades']
    const result = mongodb.getDatabase().collection('grade').find();
    result.toArray().then(grades => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(grades);
    }).catch(err => {
       console.log(err);
    });
};

const getSingle = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) res.status(400).json('Must use a valid grade ID to find grade');

    //#swagger.tags=['grades']
    const gradeId = new ObjectId(req.params.id.toString());
    const result = mongodb.getDatabase().collection('grade').find({ _id: gradeId });
    result.toArray().then(grades => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(grades[0]);
    }).catch(err => {
       console.log(err);
    });
};

const createGrade = async (req, res) => {
    //#swagger.tags=['grades']
    const { _id, studentId, classId, grades, semester, remarks } = req.body;
    const grade = {     
        _id,
        studentId,
        classId,
        grades,
        semester,
        remarks
    };
    const result = await mongodb.getDatabase().collection('grade').insertOne(grade);
    if (result.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(result.error || 'Some error occured while creating the grade');
    }
};

const updateGrade = async (req, res) => {
    if (!ObjectId.isValid(req.params.id.toString())) res.status(400).json('Must use a valid grade ID to update grade');

    //#swagger.tags=['grades']
    const gradeDbId = new ObjectId(req.params.id);
    const { _id, studentId, classId, grades, semester, remarks } = req.body;
    const grade = {     
        _id,
        studentId,
        classId,
        grades,
        semester,
        remarks
    };
    const result = await mongodb.getDatabase().collection('grade').replaceOne({ _id: gradeDbId }, grade);
    if (result.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(result.error || 'Some error occured while updating grade');
    }
};

const deleteGrade = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) res.status(400).json('Must use a valid grade ID to delete grade');

    //#swagger.tags=['grades']
    const gradeDbId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().collection('grade').deleteOne({ _id: gradeDbId });
    if (result.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(result.error || 'Some error occured while deleting the grade');
    }
};

module.exports = { 
    getAll,
    getSingle,
    createGrade,
    updateGrade,
    deleteGrade
 };