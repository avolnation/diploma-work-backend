const mongoose = require('mongoose')
const Absenteeism = require("../models/absenteeism.js")

exports.findByParams = (req, res, next) => {

    const params = req.query;

    if (req.query.hasOwnProperty("dateByDay") || req.query.hasOwnProperty("dateByRange")) {
        if (req.query.hasOwnProperty("dateByDay")) {
            // console.log(req.query)
            const {
                studentId,
                dateByDay,
                subject
            } = req.query
            let startOfTheDay = new Date(+dateByDay);
            startOfTheDay.setUTCHours(0, 0, 0, 0);
            // console.log(startOfTheDay)


            let endOfTheDay = new Date();
            endOfTheDay.setUTCHours(23, 59, 59, 999);
            // console.log(endOfTheDay)

            Absenteeism.find({
                    student: studentId,
                    date: {
                        $gte: startOfTheDay.getTime(),
                        $lte: endOfTheDay.getTime()
                    },
                    subject: subject
                })
                .populate("subject")
                .then(absenteeisms => {
                    return res.status(200).json({
                        message: "Пропуски по заданным параметрам",
                        status: "success",
                        absenteeisms: absenteeisms
                    })
                })
        }
        if (req.query.hasOwnProperty("dateByRange")) {
            const {
                studentId,
                dateByRange,
                subject
            } = req.query;

            let gte = new Date(+dateByRange[0])
            gte.setUTCHours(0, 0, 0, 0)

            let lte = new Date(+dateByRange[1])
            lte.setUTCHours(23, 59, 59, 999)

            Absenteeism
                .find({
                    student: studentId,
                    date: {
                        $gte: gte.getTime(),
                        $lte: lte.getTime()
                    },
                    subject: subject
                })
                .populate("subject")
                .then(absenteeisms => {
                    return res.status(200).json({
                        message: "Пропуски по заданным параметрам",
                        status: "success",
                        absenteeisms: absenteeisms
                    })
                })
        }
    } else {
        Absenteeism
            .aggregate([{
                    $match: {
                        "student": mongoose.Types.ObjectId(req.query.student)
                    }
                },
                {
                    $lookup: {
                        from: "subjects",
                        localField: "subject",
                        foreignField: "_id",
                        as: "subject"
                    }
                },
                {
                    $unwind: "$subject"
                },
                {
                    $group: {
                        "_id": "$subject.title",
                        "posHoursSum": {
                            $sum: {
                                $cond: [{
                                    "$eq": ["type", 1]
                                }, "$hoursNumber", 0]
                            }
                        },
                        "negHoursSum": {
                            $sum: {
                                $cond: [{
                                    "$eq": ["$type", 0]
                                }, "$hoursNumber", 0]
                            },
                        },
                        "items": {
                            $push: {
                                "subjectId": "$subject._id",
                                "_id": "$_id",
                                "date": "$date",
                                "type": "$type",
                                "subjectType": "$subject.subjectType",
                                "hoursNumber": "$hoursNumber"
                            }
                        }
                    }
                }
            ])
            .then(absenteeisms => {
                return res.status(200).json({
                    message: "Пропуски по заданным параметрам",
                    status: "success",
                    absenteeisms: absenteeisms
                })
            })
    }
}

exports.editAbsenteeism = (req, res, next) => {
    const {
        absenteeismId,
        type
    } = req.body;

    Absenteeism
        .findByIdAndUpdate(absenteeismId, {
            type: +type
        }, {
            new: true
        })
        .populate("subject")
        .then(result => {
            return res.status(201).json({
                message: "Посещение было успешно обновлено!",
                status: "success",
                result: result
            })
        })
}

exports.deleteAbsenteeism = (req, res, next) => {
    Absenteeism
        .findByIdAndDelete(req.query.absenteeismId)
        .then(result => {
            return res.status(201).json({
                message: "Посещение было успешно удалено!",
                status: "success",
                result: result
            })
        })
}