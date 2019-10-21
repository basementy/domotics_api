const mongoose = require('mongoose')

const DeviceSchema = new mongoose.Schema({
  name: String,
  status: Boolean
})

module.exports = mongoose.model('Device', DeviceSchema)