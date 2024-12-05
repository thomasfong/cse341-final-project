const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

let err;

const getAll = (req, res) => {

    mongodb
    .getDatabase()
    .db()
    .collection('Students')
    .find()
    .toArray((err, result) => {
      if (err) {
        res.status(400).json({ message: err });
      };
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(result);
    });
};


const getSingle = (req, res) => {

    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid Student id to find a Student.');
    }
    const StudentId = new ObjectId(req.params.id);
    mongodb
      .getDatabase()
      .db()
      .collection('Students')
      .find({ _id: StudentId })
      .toArray((err, result) => {
        if (err) {
          res.status(400).json({ message: err });
        };
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result[0]);
      });
  };

const createStudent = async (req, res) => {

     const Student = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      grades: req.body.email,
      subjects: req.body.subjects,
      uploadImage: req.body.uploadImage
    };
    const response = await mongodb.getDatabase().db().collection('Students').insertOne(Student);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || 'Some error occurred while creating the Student.');
    }
  };


const updateStudent = async (req, res) => {

      if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid student id to update a student.');
      }
      const studentId = new ObjectId(req.params.id);
  
      const student = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        grades: req.body.email,
        subjects: req.body.subjects,
        uploadImage: req.body.uploadImage
      };
      const response = await mongodb
        .getDatabase()
        .db()
        .collection('students')
        .replaceOne({ _id: studentId }, student);
      console.log(response);
      if (response.modifiedCount > 0) {
        res.status(204).send();
      } else {
        res.status(500).json(response.error || 'Some error occurred while updating the student.');
      }
    };

    const deleteStudent = async (req, res) => {
       
          if (!ObjectId.isValid(req.params.id)) {
            res.status(400).json('Must use a valid contact id to delete a student.');
          }
          const studentId = new ObjectId(req.params.id);
          const response = await mongodb.getDatabase().db().collection('students').deleteOne({ _id: studentId }, true);
          console.log(response);
          if (response.deletedCount > 0) {
            res.status(204).send();
          } else {
            res.status(500).json(response.error || 'Some error occurred while deleting the student.');
          }
        };

        module.exports = {
            getAll,
            getSingle,
            createStudent,
            updateStudent,
            deleteStudent
          }