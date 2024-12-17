const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {

    const result = await mongodb.getDatabase().db().collection('grades').find();
    result.toArray().then((grades) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(grades);
    });
};

const getSingle = async (req, res) => {

    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid grade id to find a grade.');
    }
    const gradeId = new ObjectId(req.params.id);
    mongodb.getDatabase().db().collection('grades').find({ _id: gradeId }).toArray().then((grade) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(grade[0]);
    });
};

const createGrade = async (req, res) => {

    const { grade_text, grade_type, student_id } = req.body;
    if (!ObjectId.isValid(student_id)) {
        res.status(400).json('Must use a valid grade id to create a grade.');
    }
    const gradeId = new ObjectId(student_id);
    const existingGrade = await mongodb.getDatabase().db().collection('student').findOne({ _id: studentId });
    if (!existingStudent) {
        return res.status(404).json('Student not found.');
    }
    const studentTitle = existingStudent.student?.title;
    const grade = {
        grades,
        grades: studentId,
        created_at: new Date(),
        updated_at: new Date()
    };
    const response = await mongodb.getDatabase().db().collection('grades').insertOne({grade});
    if (response.acknowledged) {
        res.status(200).send('SUCCESS - grade Created');
    } else {
        res.status(500).json(response.error || 'An error occured while creating the grade.');
    }
}

const updateGrade = async (req, res) => {

    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid grade id to update a grade.');
    }
    const gradeId = new ObjectId(req.params.id);
    const updatedgrade = { $set: {
        "grade.grade_text": req.body.grade_text,
        "grade.grade_type": req.body.grade_type,
        "grade.updated_at": new Date()
    } };
    const response = await mongodb.getDatabase().db().collection('grades').updateOne({ _id: gradeId }, updatedgrade);
    if (response.modifiedCount > 0) {
        res.status(200).send();
    } else {
        res.status(500).json(response.error || 'An error occured while updating the grade.');
    }
}

const deleteGrade = async (req, res) => {

    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid grade id to delete a grade.');
    }
    const gradeId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('grades').deleteOne({ _id: gradeId });
    if (response.deletedCount > 0) {
        res.status(200).send();
    } else {
        res.status(500).json(response.error || 'An error occured while deleting the grade.');
    }
}

module.exports = {
    getAll,
    getSingle,
    createGrade,
    updateGrade,
    deleteGrade
};