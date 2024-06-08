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


// login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = User.findOne({ email })

    try {
        if (user) {
            res.status(200).json({
                message: 'Login successful'
            });
        } else {
            res.status(404).json({
                message: 'User not found'
            });
        }

    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
            error,
        });
    }
})

module.exports = router
