const express = require('express');
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const {confirmToken} = require('../middlewares/AuthMiddleware')

const {sign} = require('jsonwebtoken');
//using a function called sign to create a token


router.post("/", async (req, res) => {
    const { username, password } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username: username,
            password: hash
        })

        
    })
    res.json("passed!")
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    //telling sequelize to find the user in the user table. 
    //
    const user = await Users.findOne({ where: { username: username } })

    if (!user) {
        res.json({
            error: "Such user does not have an account"
        })
    } else {
        bcrypt.compare(password, user.password).then((same) => {
            if (!same) {
                res.json({
                    error: "username and password don't match"
                })
            } else {
                // go to a random string generator to keep the secret
                //secure
                const getToken = sign({
                    username: user.username, id: user.id},
                    "criticalString")
                // res.json("login sucessful!")
                // res.json(getToken)
                res.json({ token: getToken, username: username, id: user.id})
            }
        })
    }
})

router.get ('/auth', confirmToken, (req, res) => {
    res.json(req.user);
})



module.exports = router