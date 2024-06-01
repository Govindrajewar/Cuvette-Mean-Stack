const mongoose = require('mongoose');

async function db(){
    await mongoose.connect('mongodb+srv://abhi:abhi7@cluster0.tyetzyf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
}

module.exports = db;
