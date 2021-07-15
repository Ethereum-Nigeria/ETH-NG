const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGO_URI
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    console.log('mongodb connection successful')
  } catch(err) {
    console.error(err)
  }
}

module.exports = connectDB