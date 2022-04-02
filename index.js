const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello Ganeshkanna')
})

app.listen(6000)