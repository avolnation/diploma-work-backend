const process = require('node:process')

const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb+srv://avolnation:34Q1WPNVgV6pxUeD@cluster0.sfcysht.mongodb.net/diploma-database';

const helper_functions = require('../helper_functions.js');

const Group = require('../models/group.js');
const Schedule = require('../models/schedule.js');
const Student = require('../models/student.js');
const Attendance = require('../models/attendance.js');
const Absenteeism = require('../models/absenteeism.js');


mongoose.connect(MONGODB_URI)
    // TODO : Получаем из args время пары, затем, получаем номер пары и её временные рамки, 
    // TODO : перебираем каждую группу на наличие пар в это время, ищем посещения, остальных студентов получаем списком и ставим им пропуски
    .then(res => {

        const time = process.argv[2]

        const timestampTemp = +process.argv[3]

        let timeDivided = time.split(":")

        let dayTimestamp = new Date(timestampTemp);

        dayTimestamp.setUTCHours(timeDivided[0], timeDivided[1], 0, 0);

        dayTimestamp = dayTimestamp.getTime()

        // console.log(dayTimestamp)

        const weekParity = helper_functions.getWeekParity(dayTimestamp)

        const dayOfTheWeek = helper_functions.dayOfTheWeekFromTimestamp(dayTimestamp)

        const {
            pairNumber,
            pairStarts,
            pairEnds
        } = helper_functions.getPairNumberFromTime(dayTimestamp)


        // console.log(pairStarts + " | "  + pairEnds)
        // console.log(pairNumber)

        Group.find({}).then(groups => {
            groups.forEach(group => {
                // console.log(`[GROUP] ${group.title}`)
                Schedule.find({
                        group: group._id,
                        dayOfTheWeek: dayOfTheWeek,
                        pairNumber: pairNumber
                    })
                    .then(pairs => {
                        if (pairs.length >= 1) {
                            Student.find({
                                    group: pairs[0].group
                                })
                                .then(students => {
                                    // console.log(`[STUDENTS] ${students}`)

                                    students.forEach(student => {

                                        let studentId = student._id;

                                        // console.log(`[STUDENT] ${student}`)

                                        let pairsFiltered = pairs.find(pair => (pair.weekParity == 0 || pair.weekParity == weekParity) && (pair.subgroup == 0 || student.subgroup == pair.subgroup));

                                        // console.log(`[PAIRSFILTERED] ${pairsFiltered}`)

                                        if (!(typeof pairsFiltered === 'undefined')) {
                                            Attendance.find({
                                                    student: studentId,
                                                    date: {
                                                        $gte: pairStarts,
                                                        $lte: pairEnds
                                                    },
                                                    subject: pairsFiltered.subject
                                                })
                                                .then(attendance => {
                                                    if (!(attendance.length >= 1)) {
                                                        new Absenteeism({
                                                                student: studentId,
                                                                date: dayTimestamp,
                                                                type: 0,
                                                                hoursNumber: 2,
                                                                subject: pairsFiltered.subject
                                                            })
                                                            .save()
                                                            .then(result => {
                                                                console.log(`[INFO] [Registered] New absenteeism registered`)
                                                            })
                                                    }
                                                })
                                        }
                                    })
                                })
                        } 
                        // else {
                            //TODO: Возвращаем консоль лог где написана группа и что пары нет
                        // }
                    })
            })
        })
    })