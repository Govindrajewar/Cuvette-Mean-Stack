const express = require('express')

const router = express.Router()
const User = require('../model/User.js')

// post, get, put, delete

router.get('/', async (req, res) => {
    const users = await User.find();

    res.json({
        message: 'User route is working fine',
        status: 'Working',
        users: users
    });
})


// register
router.post('/register', async (req, res) => {

    try{
        const { name, email, password } = req.body

        const newUser = new User({
            name,
            email,
            password,
        })

        await newUser.save();

        res.status(201).json({
            message: 'User registered successfully',
            user: newUser
        })

    } catch(error){
        res.status(500).json({
            status: 'ERROR',
            message: error.message
        })
    }

})

module.exports = router
