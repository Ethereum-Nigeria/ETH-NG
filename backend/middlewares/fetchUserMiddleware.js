const User = require('../models/user-model')


// @desc fetch specific user data
const fetchUserMiddleware = async (req, res, next) => {
    try {
        const foundUser = await User.findById(req.user.id).select('-password -updatedAt -createdAt')
        if(foundUser) {
            res.json(foundUser)
            next()
        }
    } catch(err) {
        return res.json(err)
    }
}

// @desc fetch all successfully registered user data
const fetchAllUsersMiddleWare = async (req, res, next) => {
    try{
        const foundUsers = await User.find({}).select('-password ')
        .lean()
        if(foundUsers) {
            res.json(foundUsers)
            next()
        }
    } catch(err) {
        res.json(err)
    }
}

module.exports = { fetchUserMiddleware, fetchAllUsersMiddleWare }