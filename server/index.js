require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller')

const app = express()

app.use(express.json())

// ENDPOINTS
app.get('/api/houses', ctrl.getAllHouses)
app.post('/api/house', ctrl.addHouse)
app.delete('/api/house/:id', ctrl.deleteHouse)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('database connected')
    app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))
})
