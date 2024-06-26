const mongoose = require('mongoose');

/*
compony name, logo url, job position/title,
monthly salary, job type, remote,
location, job description, about company,
skills required, additional information
*/

const jobSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    logoUrl: {
        type: String,
        required: true,
    },
    jobPosition: {
        type: String,
        required: true,
    },
    monthlySalary: {
        type: Number,
        required: true,
    },
    jobType: {
        type: String,
        required: true,
    },
    remote: {
        type: Boolean,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    jobDescription: {
        type: String,
        required: true,
    },
    aboutCompany: {
        type: String,
        required: true,
    },
    skillsRequired: [{
        type: String,
        required: true,
    }],
    additionalInformation: {
        type: String,
    },
});

module.exports = mongoose.model('Job', jobSchema);