const express = require('express')
const routes = express.Router()

const ledController = require('./controller/LedController')

routes.get('/status', ledController.getStatus)
routes.post('/status', ledController.saveStatus)

module.exports = routes