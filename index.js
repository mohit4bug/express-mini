const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
dotenv.config({ path: './config/config.env' })
const port = process.env.PORT || 5000



// Middlewares
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"]
}))
app.use(express.json())




app.listen(port, console.log(`PORT: ${port}`), require('./mongodb/connect'))
