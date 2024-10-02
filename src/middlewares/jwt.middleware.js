const { verifyToken } = require('../utils/jwt')

module.exports = (req, res, next) => {
    const authHeader = req.headers['authorization']

    if (!authHeader) {
        return res.status(401).json({ message: 'Access denied. No token provided.' })
    }

    const tokenParts = authHeader.split(' ')

    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
        return res.status(400).json({ message: 'Invalid token format.' })
    }

    const token = tokenParts[1]

    try {
        const decoded = verifyToken(token)

        if (decoded) {
            req.user = decoded
            next()
        } else {
            return res.status(403).json({ message: 'Invalid token.' })
        }
    } catch (err) {
        return res.status(403).json({ message: 'Invalid token.' })
    }
}