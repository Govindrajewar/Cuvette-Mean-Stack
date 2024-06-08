const express = require('express')

const router = express.Router()
const User = require('../model/User.js')

// post, get, put, delete

router.get('/', (req, res) => {
    const data = req.body
    res.json({
        message: 'User route is working fine',
        status: 'Working',
        data: data
    });
})


module.exports = router
