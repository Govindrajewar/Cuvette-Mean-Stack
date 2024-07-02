const express = require("express");
const router = express.Router();
const Job = require("../model/Job");
const validateNewJob = require("../middleware/validateNewJob");

const {
    getJobs,
    addJob,
    getJobById
} = require('../controllers/jobController')


router.get('/', getJobs)

router.post('/add', validateNewJob, addJob)

router.post('/:id', getJobById)

module.exports = router;