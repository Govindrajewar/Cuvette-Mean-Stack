const bcrypt = require('bcrypt');
const User = require("../models/users.js");
var jwt = require('jsonwebtoken');

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
};

const signupUser = async (req, res) => {
  try {
    const { name, email, password, isPremium, isAdmin } = req.body;
    // 10 number of round of encryption. also known as salt round.
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.create({
      name,
      email,
      password: encryptedPassword,
      isPremium,
      isAdmin
    });

    res.json({
      status: "SUCCESS",
      message: "User Signed Up successfully",
    });
  } catch (error) {
    res.json({
      status: "ERROR",
      message: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).lean()

    if ( !user ) {
      res.json({
        status: "FAILED",
        message: "User is not Available, Please, Sign Up first",
      });
      return
    }

    // comparing entered password with stored password hash:
    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      res.json({
        status: "FAILED",
        message: "You have entered a wrong password",
      });
      return
    }

    const jwToken = jwt.sign(user, process.env.jwtPrivateKey, { expiresIn: 60})

    res.json({
      status: "SUCCESS",
      message: "User Logged in Successfully",
      token: jwToken,
    });


  } catch (error) {
    res.json({
      status: "ERROR",
      message: error.message,
    });
  }
};


module.exports = {
  getUsers,
  signupUser,
  loginUser
}
