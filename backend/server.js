require('dotenv').config()
const express = require('express')
const app = express()

const morgan = require('morgan')
const cors = require('cors')

const connectDB = require('./models/config/db.config')



app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/', require('./routes/'))
app.use('/contact', require('./routes/contact'))

connectDB()




const port = process.env.PORT
app.listen(port, () => console.log(`server running on port ${port}`))