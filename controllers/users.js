const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.newUser = (req, res, next) => {

    const {
        email,
        password
    } = req.body

    User
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
};

exports.loginUser = (req, res, next) => {

    if(req.query.hasOwnProperty('token')){
        
        const {
            token
        } = req.query
    
        User
            .findOne({
                token: token
            })
            .then(user => {
                if (!user) {
                    return res.status(400).json({
                        message: 'Неверный токен!',
                        status: 'error',
                    })
                }
    
                if (token == user.token) {
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
                return res.status(400).json({
                    message: 'Что-то пошло не так!',
                    status: 'error',
                })
            })
    }
    else {

        const {
            login,
            password
        } = req.query

        User
        .findOne({
            login: login
        })
        .then(user => {
            if (!user) {
                return res.status(400).json({
                    message: 'Пользователь с таким логином не был найден!',
                    status: 'error',
                })
            }
            bcrypt
                .compare(password, user.password)
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
    }
};