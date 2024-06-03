var jwt = require('jsonwebtoken');

const isUserLoggedIn = (req, res, next) => {

  try{
    const { token } = req.headers
    const user = jwt.verify(token, process.env.jwtPrivateKey)
    req.user = user
    next();

  } catch (error){
    res.json({
      message: "You are not logged in Please log-in.",
    })
  }
}


const isUserAdmin = (req, res, next) => {
  const { isAdmin } = req.user;

  if (isAdmin) {
    next();
  } else {
    res.json({
      message: "You are not Authorize to access this page.",
    })
  }
};


const isUserPremium = (req, res, next) => {
  const isPremium = false;   // value added to test

  if (isPremium) {
    next();
  } else {
    res.json({
      message: "You are not Premium member. Please upgrade your plan.",
    })
  }
};


module.exports = {
    isUserLoggedIn,
    isUserAdmin,
    isUserPremium,
}
