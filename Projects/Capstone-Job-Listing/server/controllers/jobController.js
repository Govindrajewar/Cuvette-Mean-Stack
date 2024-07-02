const Job = require("../model/Job");


const getJobs = async (req, res) => {

    const jobs = await Job.find();

    res.json({
        message: 'Job route is working fine',
        status: 'Working',
        jobs: jobs
    })
}

const addJob = async (req, res) => {
  try {
    const {
      companyName,
      logoUrl,
      jobPosition,
      monthlySalary,
      jobType,
      remote,
      location,
      jobDescription,
      aboutCompany,
      skillsRequired,
      additionalInfo,
      author,
    } = req.body;

    const newJob = new Job({
      companyName,
      logoUrl,
      jobPosition,
      monthlySalary,
      jobType,
      remote,
      location,
      jobDescription,
      aboutCompany,
      skillsRequired,
      additionalInfo,
      author,
    });

    await newJob.save();

    res.json({
      message: "Job added successfully",
      jobId: newJob._id,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const getJobById = async (req, res) => {
  const jobId = req.params.id;

  try {
    const jobAvailable = await Job.findById(jobId);

    if (jobAvailable) {
      res.status(200).json({
        message: "Job found",
        job: jobAvailable,
      });
    } else {
      res.status(404).json({
        message: "Job not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  getJobs,
  addJob,
  getJobById,
};
