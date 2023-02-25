const Group = require("../models/group")

exports.newGroup = (req, res, next) => {
    const { title } = req.body;

    Group
    .findOne({title: title})
    .then(result => {
        if(!result){
            return new Group({title: title})
            .save()
            .then(result => {
                return res.status(201).json({
                    message: "Group was added succesfully!",
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