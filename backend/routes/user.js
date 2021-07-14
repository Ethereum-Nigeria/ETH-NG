const User = require('../models/user-model')
const router = require('express').Router()
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const { createJWT } = require('../utils/jwt-utils')


// @route - GET /user/register
// @desc - fetch existing users' data
// @access - private (WIP)
router.get('/', async (req, res) => {
    try {

        const foundUser = await User.find({}).select('-password -updatedAt')
        .lean()
        if(foundUser) return res.json(foundUser)
        throw Error('user record not found')
        
    } catch(err) {
        return res.json(err)
    }    
})

// @route - POST /user/register
// @desc - register new user
// @access - public
router.post('/register', [
   check('name')
   .isLength({min: 2, max: 20}).withMessage('name must be 2 - 20 characters long')
   .custom(value => {
       if(!/\S/.test(value)) {
           throw Error('name must be 2 - 20 chars long')
       } return true
   })
   .trim().escape(),
   check('email')
   .custom(async (value) => {
    try {
        const foundUser  = await User.findOne({email: value})
        if(foundUser) {
            throw Error('email already exists')
        } return
    } catch(err) {
        throw new Error(err)
    }
   })
   .isEmail().withMessage('valid email required')
   .normalizeEmail(),

   check('password') 
   .isLength({ min: 6}).withMessage('password must be at least 6 characters')
   .isLength({ max: 74}).withMessage('password cannot be longer than 74 characters')
   .custom(value => {
    if(!/\S/.test(value)) {
        throw Error('password must be at least 6 characters')
    } return true
    })
   .trim().escape(),

   check('confirmPassword')
   .custom((value, { req }) => {
    if(value !== req.body.password) {
        throw new Error('both passwords must match')
    } return true
  })


  ], async (req, res) => {
    const validationErrors = validationResult(req)
    if(!validationErrors.isEmpty()) {
        return res.json({
            validationErrors: validationErrors.array()
        })
    } else {
        const { name, password, email } = req.body
        const newUser = new User({
            name, password, email
        })
         try {
            const salt = await bcrypt.genSalt(parseInt(process.env.GEN_SALT))
            const hash = await bcrypt.hash(newUser.password, salt)
            newUser.password = hash
                try {
                    const savedUser = await newUser.save()
                    const genToken = createJWT(savedUser._id)
                    if(genToken) {
                        res.cookie('jwtToken', genToken, { httpOnly: true, maxAge: process.env.MAX_AGE * 1000}).json({
                            name: savedUser.name,
                            email: savedUser.email
                        })
                    }
                } catch (err) {
                    throw err
                }
         } catch(err) {
             return res.json(err)
         }
        
    }
})

module.exports = router