require('dotenv').config()
const express = require('express')
const app = express()

const morgan = require('morgan')
const cors = require('cors')

const connectDB = require('./models/config/db.config')



app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/contact', require('./routes/contact'))
app.use('/user', require('./routes/user'))

connectDB()




const port = process.env.PORT
app.listen(port, () => console.log(`server running on port ${port}`))