const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const MONGODB_URI = 'mongodb+srv://avolnation:34Q1WPNVgV6pxUeD@cluster0.sfcysht.mongodb.net/diploma-database';
const port = 3002;
const app = express();

const groupsRouter = require('./routes/group.js');
const studentsRouter = require('./routes/students.js');
const attendanceRouter = require('./routes/attendance.js');
const scheduleRouter = require('./routes/schedule.js');
const subjectRouter = require('./routes/subject.js');

app.use(bodyParser.json({
    extended: false
}))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next();
})

app.options('/*', (_, res) => {
    res.sendStatus(200);
});


app.use("/groups", groupsRouter);
app.use("/students", studentsRouter);
app.use("/attend", attendanceRouter);
app.use("/schedule", scheduleRouter);
app.use("/subjects", subjectRouter);

mongoose.connect(MONGODB_URI)
    .then(res => {
        app.listen(port, () => {
            console.log(`[INFO] Listening to requests on port ${port}`);
        })
    })
    .catch(err => {
        console.log(err);
    })