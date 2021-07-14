const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String, 
    minLength: [2, 'min of 2 characters required'],
    maxLength: [30, 'max of 30 characters required'],
    required: true,
    trim: true
  }, 
  email: {
    type: String, 
    minLength: [2, 'min of 2 characters required'],
    maxLength: [50, 'max of 50 characters required'],
    required: true,
    trim: true
  },
  password: {
    type: String, 
    minLength: [6, 'min of 6 characters required'],
    maxLength: [100, 'max of 100 characters required'],
    required: true,
    trim: true
  }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)
