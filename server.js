require('dotenv').config()
require('./config/database')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 8000
const app = require('./app-server')
app.listen(PORT, () => {
console.log(`I am listening on ${PORT}. We in the building.`)
})

