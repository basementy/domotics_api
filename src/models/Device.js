const mongoose = require('mongoose')

const DeviceSchema = new mongoose.Schema({
  name: String,
  status: Boolean,
  info: {
    temperature: Number,
    situation: String
  }
})

module.exports = mongoose.model('Device', DeviceSchema)