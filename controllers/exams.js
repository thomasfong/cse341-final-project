const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {

    const result = await mongodb.getDatabase().db().collection('exams').find();
    result.toArray().then((exams) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(exams);
    });
};

const getSingle = async (req, res) => {

    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid exams id to find a exam.');
    }
    const examsId = new ObjectId(req.params.id);
    mongodb.getDatabase().db().collection('exams').find({ _id: examsId }).toArray().then((exams) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(exams[0]);
    });
};

const createExam = async (req, res) => {

    const { exam_text, exam_type, student_id } = req.body;
    if (!ObjectId.isValid(student_id)) {
        res.status(400).json('Must use a valid examid to create a exam.');
    }
    const examId = new ObjectId(student_id);
    const existingexam= await mongodb.getDatabase().db().collection('student').findOne({ _id: studentId });
    if (!existingStudent) {
        return res.status(404).json('Student not found.');
    }
    const studentTitle = existingStudent.student?.title;
    const exam = {
        exams,
        exams: studentId,
        created_at: new Date(),
        updated_at: new Date()
    };
    const response = await mongodb.getDatabase().db().collection('exams').insertOne({exam});
    if (response.acknowledged) {
        res.status(200).send('SUCCESS - exam Created');
    } else {
        res.status(500).json(response.error || 'An error occured while creating the exam.');
    }
}

const updateExam = async (req, res) => {

    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid examid to update a exam.');
    }
    const examId = new ObjectId(req.params.id);
    const updatedexam= { $set: {
        "exam.exam_text": req.body.exam_text,
        "exam.exam_type": req.body.exam_type,
        "exam.updated_at": new Date()
    } };
    const response = await mongodb.getDatabase().db().collection('gexams').updateOne({ _id: examId }, updatedexam);
    if (response.modifiedCount > 0) {
        res.status(200).send();
    } else {
        res.status(500).json(response.error || 'An error occured while updating the exam.');
    }
}

const deleteExam = async (req, res) => {

    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid exam id to delete a exam.');
    }
    const examId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('exams').deleteOne({ _id: examId });
    if (response.deletedCount > 0) {
        res.status(200).send();
    } else {
        res.status(500).json(response.error || 'An error occured while deleting the exam.');
    }
}

module.exports = {
    getAll,
    getSingle,
    createExam,
    updateExam,
    deleteExam
};