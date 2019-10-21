const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

const routes = require('./routes')

mongoose.connect('mongodb+srv://biewxw:biewxw@personal-sysdr.mongodb.net/domotics?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

var port = 3000

app.listen(port, () => {
  console.log(`\n-> Server working on port ${port}`)
})