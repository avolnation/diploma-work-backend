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