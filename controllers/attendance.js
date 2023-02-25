const Attendance = require("../models/attendance");
const Student = require("../models/student");

exports.newAttendance = (req, res, next) => {
    
    const cardId = req.params.cardId;

    const timestamp = new Date().getTime() + (3600000 * 3);
    const timestampStartOfTheDay = new Date(timestamp).setUTCHours(0,0,0,0);
    const timestampEndOFTheDay = new Date(timestamp).setUTCHours(23,59,59,999);

    Attendance
    .find({
        $and: [{
            cardId: cardId, 
            date: {$gt: timestampStartOfTheDay, $lt: timestampEndOFTheDay}
        }]
    })
    .then(result => {
        const attendancesPerThisDay = result.length;

        console.log(attendancesPerThisDay)

        if(!(attendancesPerThisDay % 2)){
            return Student
            .findOne({cardId: cardId})
            .then(result => {
                return new Attendance({
                    date: timestamp, cardId: cardId, student: result._id, recordType: "in"
                })
                .save()
                .then(result => {
                    return res.status(200).json({
                        message: "New IN attendance registered",
                        status: "success"
                    })
                })
            })
        }
        else{
            return Student
            .findOne({cardId: cardId})
            .then(result => {
                return new Attendance({
                    date: timestamp, cardId: cardId, student: result._id, recordType: "out"
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

exports.getLastTwentyAttendances = (req, res, next) => {

    return Attendance
    .find()
    .limit(20)
    .populate({path: 'student', populate: {path: 'group'}})
    .then(result => {
        return res.status(200).json({
            message: "Last 20 attendances",
            status: "success",
            attendances: result
        })
    })

}