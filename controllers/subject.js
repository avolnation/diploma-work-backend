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