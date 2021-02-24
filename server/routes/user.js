const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const withAuth = require('./middleware');
const User = require('../models/User')
const { appSecret } = require('../config/keys');

const secret = appSecret;

const user = (app) => {
///Login
    app.post('/user/login', function(req, res) {
        const { email, password } = req.body;
        User.findOne({ email }, function(err, user) {
            if (err) {
            console.error(err);
            res.status(500)
                .json({
                error: 'Internal error please try again'
            });
            } else if (!user) {
            res.status(401)
                .json({
                error: 'Incorrect email or password'
            });
            } else {
            user.isCorrectPassword(password, function(err, same) {
                if (err) {
                res.status(500)
                    .json({
                    error: 'Internal error please try again'
                });
                } else if (!same) {
                res.status(401)
                    .json({
                    error: 'Incorrect email or password'
                });
                } else {
                // Issue token
                const payload = {
                    id: user._id,
                    email,
                };
                const token = jwt.sign(payload, secret, {
                    expiresIn: '7d'
                });
                res.cookie('token', token, { httpOnly: true }).sendStatus(200);
                }
            });
            }
        });
    });
    app.get('/home', function(req, res) {
        res.send('Welcome!');
    });
///Lista todos users
    app.get('/users', async (req, res) => {
        try {
            const users = await User.find();
            res.json(users)
        } catch (err) {
            res.send(`Error ${err}`)
        }
    });
//get no profile pra saber se esta logado
    app.get('/user/profile', withAuth, async function(req, res) {
        const token = 
            req.body.token ||
            req.query.token ||
            req.headers['x-access-token'] ||
            req.cookies.token;  
        
        const decoded = jwt.verify(token, appSecret);

        User.findById(decoded.id, function(err, user) {
            return res.status(200).json({
                user: user,
                email: user.email,
                password: user.password
            });
        })
    });

//get by id
    app.get('/users/:id', async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            res.status(200).json({email:user.email,
                                currentUser:user, 
                                firstName:user.firstName,
                                lastName:user.lastName,
                                phone:user.phone,
                                cpf:user.cpf,
                                _id:user._id})
        } catch (err) {
            res.send(`Error ${err}`)
        }
    })

// delete
    app.delete('/user/:userId', async (req, res) => {
        try {
            await User.deleteOne({_id: req.params.userId});
            const users = await User.find();
            res.json(users)
        } catch (err) {
            res.send(`Error ${err}`)
        }
    })

//registro*** lembrar de fazer autenticacao em relacao a email repetidos
    app.post('/user/register', function(req, res) {
        const { email, password, firstName, lastName, phone, cpf } = req.body;
        const user = new User({ email, password, firstName, lastName, phone, cpf });
        user.save(function(err) {
            if (err) {
            console.log(err);
            res.status(500).send("Error registering new user please try again.");
            } else {
            res.status(200).send("Registered!");
            }
        });
    });
      
// Edit com crypt
    // app.patch('/user/profile/', async (req, res) => {
    //     const { email, password, firstName, lastName, cpf, phone } = req.body;
    //     const token = 
    //         req.body.token ||
    //         req.query.token ||
    //         req.headers['x-access-token'] ||
    //         req.cookies.token;  
        
    //     const decoded = jwt.verify(token, appSecret);

    //     const updateQuery = {};
        
    //     if (email) updateQuery.email = email;
    //     if (password) updateQuery.password = await bcrypt.hash(password, 10);
    //     if (firstName) updateQuery.firstName = firstName
    //     if (lastName) updateQuery.lastName = lastName
    //     if (cpf) updateQuery.cpf = cpf
    //     if (phone) updateQuery.phone = phone
    //     await User.findByIdAndUpdate(decoded.id, updateQuery);

    //     return res.status(200).send("Updated!");
    // })


//edit sem crypt
    app.patch('/user/:id', async (req, res) => {
        const { email, password, firstName, lastName, cpf, phone, _id } = req.body;
        const editedUser = { email, firstName, lastName, cpf, phone}

        if(password) editedUser.password = await bcrypt.hash(password,10)
        try {
            const upDateUser = await User.findByIdAndUpdate(_id, editedUser);
            res.json(upDateUser);
        } catch (err) {
            res.send(`Error ${err}`)
        }
    })

    app.get('/user/logout', function(req, res) {
        res.cookie('token', "", { httpOnly: true }).sendStatus(200);
    });
      
    app.get('/checkToken', withAuth, function(req, res) {
        res.sendStatus(200);
    });
};

module.exports = user;