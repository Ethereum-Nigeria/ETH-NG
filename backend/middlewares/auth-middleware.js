const jwt = require('jsonwebtoken')

const cookieParser = require('cookie-parser')


const authMiddleware = (req, res, next) => {
    
    const token = req.cookies.jwtToken
    if(!token) return res.status(401).json({ msg: 'unauthorized request'})

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_KEY)
        if(decodedToken) {
            req.user = decodedToken
            next()
        } 
    } catch(err) {
        return res.json(err)
    }

}

module.exports = { authMiddleware }