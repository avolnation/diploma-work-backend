const Attendance = require("../models/attendance");
const Student = require("../models/student");
const Schedule = require("../models/schedule");

const helper_functions = require('../helper_functions')

//! Deprecated
exports.newAttendanceOld = (req, res, next) => {

    const cardId = req.params.cardId;

    const timestamp = new Date().getTime() + (3600000 * 3);
    const timestampStartOfTheDay = new Date(timestamp).setUTCHours(0, 0, 0, 0);
    const timestampEndOFTheDay = new Date(timestamp).setUTCHours(23, 59, 59, 999);

    Attendance
        .find({
            $and: [{
                cardId: cardId,
                date: {
                    $gt: timestampStartOfTheDay,
                    $lt: timestampEndOFTheDay
                }
            }]
        })
        .then(result => {
            const attendancesPerThisDay = result.length;

            // console.log(attendancesPerThisDay)

            if (!(attendancesPerThisDay % 2)) {
                return Student
                    .findOne({
                        cardId: cardId
                    })
                    .then(result => {
                        return new Attendance({
                                date: timestamp,
                                cardId: cardId,
                                student: result._id,
                                recordType: "in"
                            })
                            .save()
                            .then(result => {
                                return res.status(200).json({
                                    message: "New IN attendance registered",
                                    status: "success"
                                })
                            })
                    })
            } else {
                return Student
                    .findOne({
                        cardId: cardId
                    })
                    .then(result => {
                        return new Attendance({
                                date: timestamp,
                                cardId: cardId,
                                student: result._id,
                                recordType: "out"
                            })
                            .save()
                            .then(result => {
                                return res.status(200).json({
                                    message: "New OUT attendance registered",
                                    status: "success"
                                })
                            })
                    })
            }
        })
}

exports.newAttendance = (req, res, next) => {

    if (req.body.hasOwnProperty("fromClient")) {
        // TODO: Находим посещение если оно уже есть, далее создаём новое
        const {
            date,
            fromClient,
            student,
            subject
        } = req.body;

        const {
            pairNumber,
            pairStarts,
            pairEnds,
            pairStartsEdge
        } = helper_functions.getPairNumberFromTime(+date);

        Attendance.find({
                student: student,
                date: {
                    $lte: pairEnds,
                    $gte: pairStarts
                },
                subject: subject
            })
            .then(attendance => {
                if (attendance.length > 0) {
                    return res.status(400).json({
                        message: "Вы уже регистрировались на данное занятие!",
                        status: "error"
                    })
                } else {
                    new Attendance({
                            date: date,
                            student: student,
                            subject: subject
                        })
                        .save()
                        .then(result => {
                            return res.status(200).json({
                                message: "Посещение было успешно зарегистрировано.",
                                status: "success"
                            })
                        })
                }
            })
            .catch(e => {
                return res.status(400).json({
                    message: "Произошла ошибка на сервере",
                    status: "error"
                })
            })
    } else {

        const secureTokens = ["7QYdTNc49xOg1H3HeLpGASSt72a1voBC", ];

        console.log(req.body);

        const {
            cardId,
            secureToken,
            classroom,
        } = req.body

        if(!secureTokens.includes(secureToken)){
            return res.status(404).json({
                message: "Невозможно зарегистрироваться на занятие. Неверный или недействительный токен считывателя. Обратитесь к администратору системы.",
                status: "error"
            })
        }

        const timestamp = 1684832400000;

        const dayOfTheWeek = helper_functions.dayOfTheWeekFromTimestamp(timestamp);
        const weekParity = +helper_functions.getWeekParity(timestamp);

        const {
            pairNumber,
            pairStarts,
            pairEnds,
            pairStartsEdge
        } = helper_functions.getPairNumberFromTime(timestamp);

        Schedule.find({
                pairNumber: pairNumber,
                dayOfTheWeek: dayOfTheWeek
            })
            .then(result => {
                const pairs = result;

                const pairsCount = result.length;
                let pairClassroom = "";

                if (pairsCount == 0) {
                    return res.status(404).json({
                        message: "Сейчас пар для студента нет!",
                        status: "error"
                    })
                } else {
                    Student.findOne({
                            cardId: cardId
                        })
                        .then(result => {
                            if (result) {
                                let student = result;
                                let pairsFiltered = pairs.filter(el => el.subgroup == 0 && el.weekParity == 2)
                                if (pairsFiltered.length > 0) {
                                    pairClassroom = pairsFiltered[0].classroom
                                } else {
                                    pairsFiltered = pairs.filter(el => (el.subgroup == 0) && (el.weekParity == weekParity))
                                    if (pairsFiltered.length == 1) {
                                        pairClassroom = pairsFiltered[0].classroom
                                    } else {
                                        pairsFiltered = pairs.filter(el => (el.subgroup == result.subgroup) && (el.weekParity == weekParity))
                                        if (pairsFiltered.length == 1) {
                                            pairClassroom = pairsFiltered[0].classroom
                                        } else {
                                            return res.status(404).json({
                                                message: "Сейчас занятий для студента нет!",
                                                status: "error"
                                            })
                                        }
                                    }
                                }

                                if (pairClassroom == classroom) {
                                    Attendance.find({
                                            student: result._id,
                                            date: {
                                                $gte: pairStarts,
                                                $lte: pairEnds
                                            }
                                        })
                                        .then(result => {
                                            if (result.length > 0) {
                                                return res.status(404).json({
                                                    message: "Вы уже регистрировались на данное занятие!",
                                                    status: "error"
                                                })
                                            } else {
                                                if ((timestamp >= pairStarts) && (timestamp < pairStartsEdge)) {
                                                    new Attendance({
                                                            date: timestamp,
                                                            student: student._id,
                                                            subject: pairsFiltered[0].subject
                                                        })
                                                        .save()
                                                        .then(result => {
                                                            return res.status(201).json({
                                                                message: "Посещение зарегистрировано!",
                                                                status: "success"
                                                            })
                                                        })
                                                } else {
                                                    return res.status(404).json({
                                                        message: "Вы опоздали на занятие!",
                                                        status: "error"
                                                    })
                                                }
                                            }
                                        })
                                } else {
                                    return res.status(404).json({
                                        message: "Не та аудитория.",
                                        status: "error"
                                    })
                                }
                            } else {
                                return res.status(404).json({
                                    message: "Метка не принадлежит какому-либо студенту.",
                                    status: "error"
                                })
                            }
                        })

                }
            })
    }
}

exports.getAttendanceByParams = (req, res, next) => {

    const params = req.query

    if (params.hasOwnProperty("subject") && params.subject.length >= 1) {

        console.log(params.subject);

        const subjects = params.subject.map(subject => {
            return {subject: subject}
        })

        console.log(subjects)


        return Attendance.find({
                $or: subjects,
                date: {
                    $gte: params.gte.toString(),
                    $lte: params.lte.toString()
                }
            })
            .populate("student")
            .populate("subject")
            .then(attendances => {
                return res.status(200).json({
                    message: "Недавние посещения по заданным параметрам",
                    status: "success",
                    attendances: attendances
                })
            })
    }

    if ((params.hasOwnProperty("lte") || params.hasOwnProperty("gte")) && !(params.hasOwnProperty("subject"))) {
        const lte = params.lte.toString()
        const gte = params.gte.toString()

        const searchParams = params;
        delete searchParams.lte;
        delete searchParams.gte;
        Attendance.find({
                ...searchParams,
                date: {
                    $gte: gte,
                    $lte: lte
                }
            })
            .then((attendances) => {
                    return res.status(200).json({
                        message: "Посещения для группы между заданными промежутками",
                        status: "success",
                        attendances: attendances
                    })
                }

            )
    } else {
        Attendance
            .find(params)
            .then(attendances => {
                return res.status(200).json({
                    message: "Посещения для группы по заданным параметрам",
                    status: "success",
                    attendances: attendances
                })
            })
    }
}

exports.deleteAttendance = (req, res, next) => {

    Attendance.findByIdAndDelete(req.query._id)
        .then(result => {
            return res.status(200).json({
                message: "Посещение успешно удалено",
                status: "success"
            })
        })
}