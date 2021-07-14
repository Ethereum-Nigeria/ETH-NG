const jwt = require('jsonwebtoken')

const createJWT = id => {
  return jwt.sign({id}, process.env.JWT_KEY, { expiresIn: process.env.MAX_AGE})
}

module.exports = { createJWT }