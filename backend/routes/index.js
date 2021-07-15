const router = require('express').Router()
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const { authMiddleware } = require('../middlewares/auth-middleware')
const User = require('../models/user-model')



// @route - GET /api/user
// @desc - check user authentication status
router.get('/user', authMiddleware, async (req, res ) => {
    try {
        console.log(req.user.id)
        const foundUser = await User.findById(req.user.id).select('-password -updatedAt -_id')
        res.json(foundUser)
    } catch(err) {
        return res.json(err)
    }
})

// @route - GET /api/user/logout
// @desc - logout user

router.get('/user/logout', (req, res) => {
    return res.cookie('jwtToken', '', { maxAge: -50 }).json({
        logout: true
    })
       
})

module.exports = router