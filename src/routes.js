const express = require('express')
const routes = express.Router()

const DeviceController = require('./controller/DeviceController')

routes.get('/device/:device_name', DeviceController.index)
routes.post('/device', DeviceController.store)
routes.put('/device/:device_name', DeviceController.update)

module.exports = routes