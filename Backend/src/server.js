import app from './app';

const cors = require('cors')
const express = require('express')
const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(3000, () => {
    console.log("ouvindo porta 3000")
})
