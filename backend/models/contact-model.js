const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [1, 'min of 1 character required'],
    maxlength: [50, 'character cannot exceed 50 chars'],
    trim: true, 
  }, 
  
  email: {
    type: String,
    minlength: [5, 'min of 5 character required'],
    maxlength: [50, 'character cannot exceed 50 chars'],
    trim: true, 
  },

  message: {
    type: String, 
    minlength: [1, 'min of 1 character required'],
    maxlength: [200, 'min of 200 character required'],
    trim: true
  }
}, { timestamps: true })

const Contact = mongoose.model('contact', contactSchema)

module.exports = Contact

