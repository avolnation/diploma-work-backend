const User = require('../models/user');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer')

const message = require('../emailMessageTemplate.js')

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'testforavomail@gmail.com',
        pass: 'jihhkkqociluevfu',
    }
})

exports.userDataHandler = (req, res, next) => {

    switch (req.body.method) {
        case "new-user":
            return User
                .findOne({
                    email: email
                })
                .then(userDoc => {
                    if (userDoc) {
                        return res.status(400).json({
                            message: 'Пользователь с такой почтой уже зарегистрирован! Выберите другую почту, или, восстановите пароль, если забыли его.',
                            status: 'error',
                        })
                    }
                    return bcrypt.hash(password, 12).then(hashedPassword => {
                            return bcrypt.hash(hashedPassword + Date.now().toString(), 12)
                                .then(hashedToken => {
                                    const user = new User({
                                        ...req.body,
                                        password: hashedPassword,
                                        token: hashedToken
                                    });
                                    return user.save()
                                })
                        })
                        .then(result => {
                            console.log(result)
                            res.status(201).json({
                                message: `Вы успешно зарегистрировались!`,
                                status: 'success'
                            })
                        })
                })
                .catch(err => {
                    return res.status(400).json({
                        message: 'Что-то пошло не так!',
                        status: 'error'
                    })
                })
            break;
        case "new-password":
            return User.findOne({
                    login: req.body.login,
                    resetToken: req.body.resetToken
                })
                .then(user => {
                    if (user) {
                        bcrypt.hash(req.body.password, 12).then(hashedPassword => {
                            bcrypt.hash(hashedPassword + Date.now().toString(), 12)
                                .then(hashedToken => {
                                    user.updateOne({
                                            password: hashedPassword,
                                            token: hashedToken,
                                            resetToken: '',
                                            resetTokenExpiration: ''
                                        })
                                        .then(result => {
                                            return res.status(200).json({
                                                message: 'Пароль был изменён успешно!',
                                                status: 'success'
                                            })
                                        })
                                })
                        })
                    } else {
                        return res.status(400).json({
                            message: 'Что-то пошло не так!',
                            status: 'error'
                        })
                    }
                })
    }
};

exports.loginAndForgotPasswordHandler = (req, res, next) => {

    switch (req.query.method) {

        case "login":
            return User
                .findOne({
                    login: req.query.login
                })
                .then(user => {
                    if (!user) {
                        return res.status(400).json({
                            message: 'Пользователь с таким логином не был найден!',
                            status: 'error',
                        })
                    }
                    bcrypt
                        .compare(req.query.password, user.password)
                        .then(doMatch => {
                            if (doMatch) {
                                return res.status(200).json({
                                    message: 'Авторизация успешна!',
                                    status: 'success',
                                    token: user.token,
                                    userdata: {
                                        name: user.name,
                                        surname: user.surname,
                                        login: user.login,
                                        role: user.role
                                    }
                                })
                            }
                            return res.status(400).json({
                                message: 'Неправильный пароль!',
                                status: 'error',
                            })
                        })
                })
                .catch(err => {
                    return res.status(400).json({
                        message: 'Что-то пошло не так!',
                        status: 'error',
                    })
                })
            break;

        case "login-by-token":
            return User
                .findOne({
                    token: req.query.token
                })
                .then(user => {
                    if (!user) {
                        return res.status(400).json({
                            message: 'Неверный токен!',
                            status: 'error',
                        })
                    }

                    if (req.query.token == user.token) {
                        res.status(200).json({
                            message: 'Авторизация по токену успешна!',
                            status: 'success',
                            token: user.token,
                            userdata: {
                                name: user.name,
                                surname: user.surname,
                                login: user.login,
                                role: user.role
                            },
                        })
                    }
                })
                .catch(err => {
                    console.log(err);
                    return res.status(400).json({
                        message: 'Что-то пошло не так!',
                        status: 'error',
                    })
                })
            break;

        case "reset-token-confirmation":
            return User.findOne({
                    login: req.query.login
                })
                .then(user => {
                    const timestampNow = new Date().getTime();
                    if ((req.query.resetToken == user.resetToken) && (+timestampNow <= +user.resetTokenExpiration)) {
                        return res.status(200).json({
                            message: "Код верен. Теперь введите новый пароль",
                            status: "success"
                        })
                    } else {
                        return res.status(404).json({
                            message: "Неверный или просроченный код.",
                            status: "error"
                        })
                    }
                })
            break;

        case "forgot-password":
            return User.findOne({
                    login: req.query.login
                })
                .then(user => {
                    if (user) {
                        const l = Math.pow(10, 6);

                        let resetToken = Math.floor(Math.random() * l).toString();

                        console.log(resetToken);

                        let resetTokenExpiration = +(new Date().getTime()) + 600000;

                        user.updateOne({
                                resetToken: resetToken,
                                resetTokenExpiration: resetTokenExpiration
                            }, {
                                returnDocument: 'after'
                            })
                            .then(result => {
                                console.log(result)
                                transporter.sendMail({
                                    from: 'testforavomail@gmail.com',
                                    to: user.login,
                                    subject: 'Password Reset',
                                    html: message.message(resetToken)
                                }, (err) => {
                                    if (err) {
                                        console.log(err);
                                        return res.status(400).json({
                                            message: 'Что-то пошло не так!',
                                            status: 'error',
                                        })
                                    }
                                    return res.status(201).json({
                                        message: 'Код для восстановления пароля был отправлен на почту!',
                                        status: 'success',
                                    })
                                })
                            })
                    }
                })
            break;
    }
}