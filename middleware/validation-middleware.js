const validator = require('../helpers/validate');
const saveStudent = async (req, res, next) => {
    const validationRule = {
        "name": "required|string",
        "age": "required|string",
        "email": "required|string|email",
        "enrollmentDate": "required|date"
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Invalid student info',
                    data: err
                });
        } else {
            next();
        }
    }).catch( err => console.log(err))
}

const saveClass = async (req, res, next) => {
    const validationRule = {
        "classId": "required|string",
        "name": "required|string", 
        "email": "required|string|email",
        "teacher": "required|string", 
        "schedule" : "required|string", 
        "room": "required|integer", 
        "capacity": "required|integer",
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Invalid class info',
                    data: err
                });
        } else {
            next();
        }
    }).catch( err => console.log(err))
}

const saveGrade = async (req, res, next) => {
    const validationRule = {
        "_Id": "required|string",
        "studentId": "required|string", 
        "classId": "required|string",
        "grade": "required|string", 
        "semester" : "required|string", 
        "remarks": "required|string", 
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Invalid grade info',
                    data: err
                });
        } else {
            next();
        }
    }).catch( err => console.log(err))
}

const saveExam = async (req, res, next) => {
    const validationRule = {
        "_Id": "required|string",
        "name": "required|string", 
        "description": "required|string",
        "president": "required|string", 
        "meetingSchedule" : "required|string", 
        "location": "required|string", 
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Invalid exam info',
                    data: err
                });
        } else {
            next();
        }
    }).catch( err => console.log(err))
}


module.exports = {
    saveStudent,
    saveClass,
    saveGrade,
    saveExam
};