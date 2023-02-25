const Schedule = require("../models/schedule.js");

exports.newSchedule = (req, res, next) => {
    // const { dayOfTheWeek, weekParity, group, scheduleForThisDay } = req.body;

    // console.log(typeof dayOfTheWeek, typeof weekParity, typeof group, typeof scheduleForThisDay)

    return new Schedule(req.body)
    .save()
    .then(result => {
        return res.status(201).json({
            message: "Schedule for this day saved",
            status: "success"
        })
    })
}