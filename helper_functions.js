exports.dayToRelative = (day) => {
    const days = {
        'Понедельник': 'В понедельник',
        'Вторник': 'Во вторник',
        'Среда': 'В среду',
        'Четверг': 'В четверг',
        'Пятница': 'В пятницу',
        'Суббота': 'В субботу',
    }
    return days[day]
}


exports.declOfNum = (number, titles) => {
    cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

exports.dayOfTheWeekFromTimestamp = (timestamp) => {
    const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    return days[+new Date(timestamp).getDay() - 1]
}

exports.getWeekParity = (timestamp) => {
    const firstDayOfYear = new Date(new Date(timestamp).getFullYear(), 0, 1);
    const pastDaysOfYear = (timestamp - firstDayOfYear) / 86400000;
    const weekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
    const parity = weekNumber % 2 === 0 ? 0 : 1;
    return parity;
}


exports.getPairNumberFromTime = (timestamp) => {
    
    const pairStart = [
        ["9:00", "10:25"],
        ["10:40", "12:05"],
        ["12:25", "13:50"],
        ["14:20", "15:45"],
        ["15:55", "17:20"],
        ["17:30", "18:55"]
    ]

    let pairNumber = 0;
    let pairStarts = 0;
    let pairEnds = 0;
    let pairStartsEdge = 0;

    pairStart.forEach((el, index) => {
        let pairStartTime = el[0].split(":")
        let pairEndTime = el[1].split(":")
        const pairStart = new Date(timestamp).setUTCHours(pairStartTime[0], pairStartTime[1] == "00" ? 0 : pairStartTime[1], 0, 0);
        const pairEnd = new Date(timestamp).setUTCHours(pairEndTime[0], pairEndTime[1] == "00" ? 0 : pairEndTime[1], 0, 0);
        if ((timestamp >= pairStart) && (timestamp <= pairEnd)) {
            pairNumber = index + 1;
            pairStarts = pairStart;
            pairEnds = pairEnd;
            pairStartsEdge = +pairStart + 600000;
        }
    })

    return { pairNumber: pairNumber, pairStarts: pairStarts, pairEnds: pairEnds, pairStartsEdge: pairStartsEdge}
}