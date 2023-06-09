const Subject = require("../models/subject.js");

exports.newSubject = (req, res, next) => {

    return new Subject(req.body)
        .save()
        .then(result => {
            return res.status(201).json({
                message: "Предмет был создан успешно.",
                status: "success"
            })
        })
}

exports.getSubjectsByGroup = (req, res, next) => {
    
    const group = req.params.groupId;

    Subject.find({
            "group": group
        })
        .then(result => {
            return res.status(200).json({
                message: "Предметы по заданным параметрам.",
                status: "success",
                subjects: result
            })
        })

}

exports.getSubjectsByParams = (req, res, next) => {
    const params = req.query;
    Subject.find(params)
    .then(subjects => {
        return res.status(200).json({
            message: "Предметы по заданным параметрам.",
            status: "success",
            subjects: subjects
        })
    })
}