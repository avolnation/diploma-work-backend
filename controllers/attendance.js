const Attendance = require("../models/attendance");
const Student = require("../models/student");
const Schedule = require("../models/schedule");

const helper_functions = require('../helper_functions')

exports.newAttendance = (req, res, next) => {

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

            console.log(attendancesPerThisDay)

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

exports.newAttendanceTemp = (req, res, next) => {
    // TODO 1: Сделать что-то с GMT (сейчас эта функция работает на GMT time)
    // TODO 2: Заменить основную функцию в routes данной 
    const {
        cardId,
        time,
        classroom
    } = req.query

    const pairStart = [
        ["9:00", "10:25"],
        ["10:40", "12:05"],
        ["12:25", "13:50"],
        ["14:20", "15:45"],
        ["15:55", "17:20"],
        ["17:30", "18:55"]
    ]

    const timestamp = +time

    const dayOfTheWeek = helper_functions.dayOfTheWeekFromTimestamp(timestamp);
    const weekParity = +helper_functions.getWeekParity(timestamp);
    // console.log(time)

    // const timestamp = +time + (3600000 * 3);
    let pairNumber = 0;
    let pairStarts = 0;
    let pairEnds = 0;
    let pairStartsEdge = 0;
    // console.log("Time now: " + timestamp)

    pairStart.forEach((el, index) => {
        let pairStartTime = el[0].split(":")
        let pairEndTime = el[1].split(":")
        const pairStart = new Date(timestamp).setUTCHours(pairStartTime[0], pairStartTime[1] == "00" ? 0 : pairStartTime[1], 0, 0);
        // console.log("Pair start: " + pairStart)
        const pairEnd = new Date(timestamp).setUTCHours(pairEndTime[0], pairEndTime[1] == "00" ? 0 : pairEndTime[1], 0, 0);
        // console.log("Pair end: " + pairEnd)
        // console.log(!!(timestamp > pairStart))
        // console.log(!!(timestamp < pairEnd))
        if ((timestamp > pairStart) && (timestamp < pairEnd)) {
            pairNumber = index + 1;
            pairStarts = pairStart;
            pairEnds = pairEnd;
            pairStartsEdge = +pairStart + 600000
        }
    })
    // console.log(!! timestamp > pairStarts)
    // console.log(!! timestamp < pairStartsEdge)
    // console.log(pairStarts + " | " +  pairStartsEdge)
    console.log(pairNumber)
    console.log(dayOfTheWeek)
    Schedule.find({
            pairNumber: pairNumber,
            dayOfTheWeek: dayOfTheWeek
        })
        .then(result => {
            const pairs = result;
            console.log(pairs)
            const pairsCount = result.length;
            let pairClassroom = "";

            if (pairsCount == 0) {
                return res.status(404).json({
                    message: "No pairs for this student right now!",
                    status: "error"
                })
            } else {
                Student.findOne({
                        cardId: cardId
                    })
                    .then(result => {
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
                                        message: "No pairs for this student right now!",
                                        status: "error"
                                    })
                                }
                            }
                        }

                        if (pairClassroom == classroom) {
                            if ((timestamp > pairStarts) && (timestamp < pairStartsEdge)) {
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
                                                message: "You already have attendance registered for this pair",
                                                status: "error"
                                            })
                                        } else {
                                            new Attendance({
                                                    date: timestamp,
                                                    student: student._id
                                                })
                                                .save()
                                                .then(result => {
                                                    return res.status(201).json({
                                                        message: "New attendance registered",
                                                        status: "success"
                                                    })
                                                })
                                        }
                                    })
                            } else {
                                return res.status(404).json({
                                    message: "Sorry, you're late!",
                                    status: "error"
                                })
                            }
                        } else {
                            return res.status(404).json({
                                message: "Wrong classroom",
                                status: "error"
                            })
                        }
                    })
            }
        })
}

//! Подумать, нужна ли данная функция (???)
// exports.getLastTwentyAttendances = (req, res, next) => {

//     return Attendance
//         .find()
//         .limit(20)
//         .populate({
//             path: 'student',
//             populate: {
//                 path: 'group'
//             }
//         })
//         .then(result => {
//             return res.status(200).json({
//                 message: "Last 20 attendances",
//                 status: "success",
//                 attendances: result
//             })
//         })

// }