const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {

    const result = await mongodb.getDatabase().db().collection('classes').find();
    result.toArray().then((classes) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(classes);
    });
};

const getSingle = async (req, res) => {

    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid class id to find a class.');
    }
    const classId = new ObjectId(req.params.id);
    mongodb.getDatabase().db().collection('classes').find({ _id: classId }).toArray().then((class) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(class[0]);
    });
};

const createclass = async (req, res) => {

    const { class_text, class_type, student_id } = req.body;
    if (!ObjectId.isValid(student_id)) {
        res.status(400).json('Must use a valid class id to create a class.');
    }
    const classId = new ObjectId(student_id);
    const existingClass = await mongodb.getDatabase().db().collection('student').findOne({ _id: studentId });
    if (!existingStudent) {
        return res.status(404).json('Student not found.');
    }
    const studentTitle = existingStudent.student?.title;
    const classes = {
        classes,
        classes: studentId,
        created_at: new Date(),
        updated_at: new Date()
    };
    const response = await mongodb.getDatabase().db().collection('classes').insertOne({class});
    if (response.acknowledged) {
        res.status(200).send('SUCCESS - class Created');
    } else {
        res.status(500).json(response.error || 'An error occured while creating the class.');
    }
}

const updateclass = async (req, res) => {

    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid class id to update a class.');
    }
    const classId = new ObjectId(req.params.id);
    const updatedclass = { $set: {
        "class.class_text": req.body.class_text,
        "class.class_type": req.body.class_type,
        "class.updated_at": new Date()
    } };
    const response = await mongodb.getDatabase().db().collection('classs').updateOne({ _id: classId }, updatedclass);
    if (response.modifiedCount > 0) {
        res.status(200).send();
    } else {
        res.status(500).json(response.error || 'An error occured while updating the class.');
    }
}

const deleteclass = async (req, res) => {

    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid grade id to delete a class.');
    }
    const classId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('classes').deleteOne({ _id: classId });
    if (response.deletedCount > 0) {
        res.status(200).send();
    } else {
        res.status(500).json(response.error || 'An error occured while deleting the class.');
    }
}

module.exports = {
    getAll,
    getSingle,
    createclass,
    updateclass,
    deleteclass
};