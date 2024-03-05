const express = require('express')
const cors = require('cors');
const { db } = require('./db/db'); //imported db method from db.js file
const {readdirSync} = require('fs') //read info from specified directory
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors()) //what server you want to access by

//Routes
readdirSync('./routes').map((route) => app.use('/api/v1',require('./routes/' + route))) //routes is the target folder

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}
server()