const Student = require('../models/student.js')
const Attendance = require('../models/attendance.js')
const helper_functions = require('../helper_functions.js')

exports.newStudent = (req, res, next) => {
    Student
        .findOne({
            cardId: req.body.cardId
        })
        .then(result => {
            if (!result) {
                return new Student({
                        ...req.body
                    })
                    .save()
                    .then(result => {
                        return res.status(201).json({
                            message: "Студент был добавлен успешно",
                            status: "success"
                        })
                    })
            }
            return res.status(400).json({
                error: "Такая метка принадлежит другому студенту. Попробуйте другую.",
                status: "error",
            })
        })
}

exports.getStudentsByParams = (req, res, next) => {

    // console.log(req.query)
    // if (req.query.hasOwnProperty("attendance")) {
    //     const params = req.query
    //     const timeNow = params.timeNow
    //     delete params.attendance
    //     delete params.timeNow

    //     const pairInfo = helper_functions.getPairNumberFromTime(+timeNow);

    //     console.log(pairInfo.pairStarts)
    //     console.log(pairInfo.pairEnds)

    //     Student
    //         .find(params)
    //         .then(students => {
    //             let mappedStudents = students;


    //                     mappedStudents = mappedStudents.map((student, index) => {
    //                         Attendance.find({
    //                                 student: student._id,
    //                                 date: {
    //                                     $gte: pairInfo.pairStarts,
    //                                     $lte: pairInfo.pairEnds
    //                                 }
    //                             })
    //                             .then(result => {
    //                                 // clearTimeout(timer);
    //                                 // startTimer();
    //                                 if (result.length > 0) {
    //                                     return {
    //                                         ...student,
    //                                         attendance: result[0]
    //                                     }
    //                                 }
    //                             })
    //                     })
    //                 )
    //                 .then(() => {
    //                     return res.status(200).json({
    //                         message: "Список студентов с записями о посещениях...",
    //                         status: "success",
    //                         students: mappedStudents
    //                     })
    //                 })




    // const startTimer = () => { {
    //     timer = setTimeout(() => {
    //         return res.status(200).json({
    //             message: "Список студентов с записями о посещениях...",
    //             status: "success",
    //             students: mappedStudents
    //         })
    //     }, 2000)
    // }}

    // })
    // } else {

    Student
        .find(req.query)
        .populate("group")
        .then(students => {
            return res.status(200).json({
                message: "Список студентов по полученным параметрам",
                status: "success",
                students: students
            })
        })
}

exports.getAllStudents = (req, res, next) => {
    Student
        .find({})
        .populate('group')
        .then(result => {
            return res.status(200).json({
                message: "All students presented in data field!",
                status: "success",
                data: result
            })
        })
}