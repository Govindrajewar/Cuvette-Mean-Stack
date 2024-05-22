const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// users
const User = mongoose.model('User', {
    firstName: String,
    lastName: String,
    phoneNumber: Number,
    isGraduated: Boolean,
    }
)

// children
const Child = mongoose.model('Child', {
    firstName: String,
    lastName: String,
    age: Number,
    }
)

// ladies
const Lady = mongoose.model('Lady', {
    firstName: String,
    lastName: String,
    }
)

app.get('/', (req, res)=> {
    res.send('Connect MongoDB to nodeJS server');
})

app.listen(process.env.Port, ()=>{
    mongoose
        .connect(process.env.MongoDB_URL)
        .then(() => console.log('Server is running'))
        .catch(err => console.log(err));
})
