const router = require('express').Router()
const { check, validationResult }  = require('express-validator')
const Contact = require('../models/contact-model')


// @route - GET /contact 
// @desc - fetch all contacts
router.get('/', async(req, res) => {
  try {
    const foundContacts = await Contact.find({})
      .lean()
      .exec()
    res.json({
      success: true,
      foundContacts
    })

  } catch(err) {
    res.json(err)
  }

})


// @route - POST /contact
// @desc - create contact
router.post('/', [
  check('name')
  .custom(value => {
    if(!/\S/.test(value)) {
      throw new Error('name field cannot be left blank')
    } return true
  })
  .not().isEmpty().withMessage('name field cannot be left blank')
  .trim().escape(),
  
  check('email')
  .isEmail().withMessage('email must be valid')
  .normalizeEmail(),

  check('message')
  .custom(value => {
    if(!/\S/.test(value)) {
      throw new Error('message field cannot be left blank')
    } return true
  })
  .not().isEmpty().withMessage('message field cannot be left blank')
  .trim().escape(),

  ], async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.json({
        validationError: true,
        errors: errors.array()
      })
    } else {
        const { name, email, message } = req.body
          const newContact = new Contact({
            name,
            email: email.toLowerCase(),
            message
          })
          try {
            const savedContact = await newContact.save()
            res.json({
              success: true,
              savedContact
            })
          } catch(err) {
            res.json(err)
        }
      }
  
   
})

module.exports = router