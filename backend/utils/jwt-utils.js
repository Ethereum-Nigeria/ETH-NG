const jwt = require('jsonwebtoken')

const createJWT = id => {
  return jwt.sign({id}, process.env.JWT_KEY )
}

module.exports = { createJWT }