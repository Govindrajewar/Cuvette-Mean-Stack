const User = require('../models/users.js');

const getUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.json({
        status: "SUCCESS",
        data: users,
      });
    } catch (error) {
      res.json({
        status: "ERROR",
        message: error.message,
      });
    }
  }


const createUser = async (req, res) => {
    try {

        const { name, email, password, phone, isMinor } = req.body;
        await User.create({ name, email, password, phone, isMinor })
        res.json({
            status: "SUCCESS",
            message: "User Created Successfully"
          });
    } catch (error) {
      res.json({
        status: "ERROR",
        message: error.message,
      });
    }
  }


const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password, phone, isMinor } = req.body;
        await User.findByIdAndUpdate(id, { name, email, password, phone, isMinor })
        res.json({
            status: "SUCCESS",
            message: "User Updated Successfully"
          });
    } catch (error) {
      res.json({
        status: "ERROR",
        message: error.message,
      });
    }
  }

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    await User.findByIdAndDelete(id)
    res.json({
      status: 'SUCCESS',
      message: 'User deleted successfully'
    })
  } catch (error) {
    res.status(500).json({
      status: 'FAILED',
      message: 'Something went wrong'
    })
  }
}


module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser
}
