const express = require('express')
require('dotenv').config()
const sequelize = require("./db")

const PORT = process.env.PORT

const app = express()

const connectToDB = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Hello on PORT ${PORT}!`))
    }
    catch (e) {
        console.log(e)
    }
}

connectToDB()