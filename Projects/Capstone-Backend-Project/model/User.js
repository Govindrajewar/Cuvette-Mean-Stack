const mongoose = require('mongoose');

// name, email, password
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,       //regex to parse or validate mail
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})

mongoose.exports = mongoose.model('User', userSchema)