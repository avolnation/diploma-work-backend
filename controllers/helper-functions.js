const helper_functions = require("../helper_functions.js")

exports.getInfoFromTimestamp = (req, res, next) => {
    const timestamp = +req.query.timestamp

    const info = helper_functions.getPairNumberFromTime(timestamp)

    const dayOfTheWeek = helper_functions.dayOfTheWeekFromTimestamp(timestamp)

    const weekParity = helper_functions.getWeekParity(timestamp)

    return res.status(200).json({
        status: "success",
        message: "Служебная информация о занятии",
        info: {...info, dayOfTheWeek: dayOfTheWeek, weekParity: weekParity},
    })
}