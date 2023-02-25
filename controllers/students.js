const Student = require('../models/student.js')

exports.newStudent = (req, res, next) => {
    const {cardId, name, surname, patronymic, dateOfBirth, group} = req.body;

    Student
    .findOne({cardId: cardId})
    .then(result => {
        if(!result){
            return new Student({
                cardId: cardId, 
                name: name, 
                surname: surname, 
                patronymic: patronymic, 
                dateOfBirth: dateOfBirth, 
                group: group})
            .save()
            .then(result => {
                return res.status(201).json({
                    message: "Student was created succesfully!",
                    status: "success"
                })
            })
        }
        return res.status(400).json({
            status: "error",
            error: "Data with such credentials already exists."
        })
    })
}

exports.getAllStudents = (req, res, next) => {
    Student
    .find({})
    .populate('group')
    .then(result => {
        return res.status(200).json({
            message: "All students presented in data field!",
            status: "success",
            data: result
        })
    })
}
