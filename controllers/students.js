const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

<<<<<<< HEAD
const getAll = async (req, res) => {
    //#swagger.tags=['students']
    const result = mongodb.getDatabase().collection('student').find();
    result.toArray().then(students => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(students);
    }).catch(err => {
       console.log(err);
    });
};

const getSingle = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) res.status(400).json('Must use a valid student ID to find student');

    //#swagger.tags=['students']
    const studentId = new ObjectId(req.params.id.toString());
    const result = mongodb.getDatabase().collection('student').find({ _id: studentId });
    result.toArray().then(students => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(students[0]);
    }).catch(err => {
       console.log(err);
    });
};

const createStudent = async (req, res) => {
    //#swagger.tags=['students']
    const { name, age, email, classes, grades, clubs, enrollmentDate } = req.body;
    const student = {     
        name,
        age,
        email,
        classes,
        grades,
        clubs,
        enrollmentDate
    };
    const result = await mongodb.getDatabase().collection('student').insertOne(student);
    if (result.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(result.error || 'Some error occured while creating the student');
    }
};

const updateStudent = async (req, res) => {
    if (!ObjectId.isValid(req.params.id.toString())) res.status(400).json('Must use a valid student ID to update employee');

    //#swagger.tags=['students']
    const studentDbId = new ObjectId(req.params.id);
    const { name, age, email, classes, grades, clubs, enrollmentDate } = req.body;
    const student = {     
        name,
        age,
        email,
        classes,
        grades,
        clubs,
        enrollmentDate
    };
    const result = await mongodb.getDatabase().collection('student').replaceOne({ _id: studentDbId }, student);
    if (result.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(result.error || 'Some error occured while updating student');
    }
};

const deleteStudent = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) res.status(400).json('Must use a valid student ID to delete student');

    //#swagger.tags=['students']
    const studentDbId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().collection('student').deleteOne({ _id: studentDbId });
    if (result.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(result.error || 'Some error occured while deleting the student');
    }
};

module.exports = { 
    getAll,
    getSingle,
    createStudent,
    updateStudent,
    deleteStudent
 };
=======
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
>>>>>>> 68af191a95c195b3b25f5adde136f34b53c3cdbb
