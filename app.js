require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = 3002;
const app = express();

const groupsRouter = require('./routes/group.js');
const studentsRouter = require('./routes/students.js');
const attendanceRouter = require('./routes/attendance.js');
const scheduleRouter = require('./routes/schedule.js');
const subjectRouter = require('./routes/subject.js');
const absenteeismRouter = require('./routes/absenteeism.js');
const functionsRouter = require('./routes/helper-functions.js');

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
app.use("/absenteeisms", absenteeismRouter);
app.use("/functions", functionsRouter);

mongoose.connect(process.env.MONGODB_URI)
    .then(res => {
        app.listen(port, () => {
            console.log(`[INFO] Listening to requests on port ${port}`);
        })
    })
    .catch(err => {
        console.log(err);
    })