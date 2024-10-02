const {verifyToken} = require('../utils/jwt')

module.exports = (req, res, next) => {
    const token = req.headers['authorization']
    if (!token) {
        return res.status(401).json({message: 'Access denied. No token provided.'});
    }

    try {
        const decoded = verifyToken(token.split(' ')[1])
        req.user = decoded
        next()
    } catch (err) {
        return res.status(400).send({message: 'Invalid token.'})
    }
}