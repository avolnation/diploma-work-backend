const Subject = require("../models/subject.js");

exports.newSubject = (req, res, next) => {

    return new Subject(req.body)
        .save()
        .then(result => {
            return res.status(201).json({
                message: "Subject created succesfully",
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
                message: "Subjects found for this group",
                status: "success",
                subjects: result
            })
        })

}