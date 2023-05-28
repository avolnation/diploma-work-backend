const mongoose = require('mongoose')
const Schedule = require("../models/schedule.js");
const Subject = require("../models/subject.js");
const helperFunctions = require("../helper_functions.js")

exports.newSchedule = (req, res, next) => {
    // console.log(req.body);

    const {
        dayOfTheWeek,
        weekParity,
        group,
        subject,
        subgroup,
        pairNumber
    } = req.body;

    if (req.body["replace_flag"] === 'true') {
        const newPair = req.body
        delete newPair["replace_flag"]
        return Schedule
            .deleteMany({
                pairNumber: newPair.pairNumber,
                dayOfTheWeek: dayOfTheWeek
            })
            .then(() => {
                new Schedule(newPair)
                    .save()
                    .then(result => {
                        return res.status(201).json({
                            message: 'Новая пара сохранена',
                        })
                    })
            })
    } else {
        // return Schedule
        //     .find({
        //         pairNumber: pairNumber,
        //         dayOfTheWeek: dayOfTheWeek
        //     })
        //     .then(result => {
        //         // console.log(result + !!result)
        //         return result.length >= 1 ?
        //             res.status(202).json({
        //                 message: `${helperFunctions.dayToRelative(dayOfTheWeek)} уже есть ${helperFunctions.declOfNum(result.length, ['пара', 'пары', 'пар'])} (${result.length}). Продолжение приведёт к удалению существующих(ей) пар(ы) и записи заданной пары. Продолжить?`,
        //                 status: "warning"
        //             }) :
                    new Schedule({...req.body})
                    .save()
                    .then(result => {
                        return res.status(201).json({
                            message: 'Новая пара сохранена',
                            status: 'success'
                        })

                    })
            // })
    }


    // new Schedule(req.body)
    //     .save()
    //     .then(result => {
    //         return res.status(201).json({
    //             message: "Schedule for this day saved",
    //             status: "success"
    //         })
    //     })
}

exports.editSchedule = (req, res, next) => {
    const body = req.body;

    const findObject = {
        ...body
    };

    delete findObject.subject

    Schedule
        .find(findObject)
        .then(result => {
            if (result.length >= 1) {
                return Schedule
                    .findByIdAndUpdate(result._id, {
                        ...result,
                        subject: body.subject
                    }, {
                        returnDocument: "after"
                    })
                    .then(result => {
                        return res.status(201).json({
                            message: 'Расписание было успешно обновлено',
                            body: result
                        })
                    })
            }
            return res.status(201).json({
                message: "Schedule for specified day and group found",
                schedule: result
            })
        })


}

exports.getSchedule = (req, res, next) => {

    const params = req.query;

    Schedule
        .find(params)
        .populate('subject')
        .then(pairInfo => {
            // console.log(pairInfo)
            return res.status(200).json({
                status: "success",
                message: "Занятия по заданным параметрам",
                pairs: pairInfo
            })
        })
}

exports.getScheduleByDayAndGroup = (req, res, next) => {

    // const query = querystring.parse(req.query);

    // console.log(req.query)

    const {
        day,
        group
    } = req.query

    // console.log(day + group)


    //! Aggregate не приводит String к ObjectID, поэтому, нужно String кастить к ObjectId
    return Schedule
        .aggregate([{
                $match: {
                    "dayOfTheWeek": day,
                    "group": mongoose.Types.ObjectId(group)
                }
            },
            // Аналог populate
            {
                $lookup: {
                    from: "subjects",
                    localField: "subject",
                    foreignField: "_id",
                    as: "subject"
                }
            },
            {
                $group: {
                    "_id": "$pairNumber",
                    "items": {
                        $addToSet: {
                            "weekParity": "$weekParity",
                            "subgroup": "$subgroup",
                            "classroom": "$classroom",
                            "subject": "$subject"
                        }
                    }
                }
            },
        ])
        .sort({
            "_id": "asc"
        })
        .then(result => {
            return res.status(201).json({
                message: "Schedule for specified day and group found",
                schedule: result
            })
        })
}