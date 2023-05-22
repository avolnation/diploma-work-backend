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
                    message: "Группа была создана успешно!",
                    status: "success"
                })
            })
        }
        return res.status(400).json({
            message: "Группа с таким названием уже существует.",
            status: "error",
        })
    })
}

exports.getAllGroups = (req, res, next) => {
    Group.find()
    .sort({title: "desc"})
    .then(result => {
        return res.status(200).json({
            message: "Группы по запросу.",
            groups: result
        })
    })
}