const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {

    try{
        const token = req.header('Authorization').split(' ')[1]

        if(!token) {
            return res.status(401).send('Access Denied. Token not found or valid');
        }

        const decoded = jwt.verify(token, 'secretkey')

        req.user = decoded;
        next()

    } catch (error) {
        res.status(500).send('Access Denied')
    }

}

module.exports = verifyToken;