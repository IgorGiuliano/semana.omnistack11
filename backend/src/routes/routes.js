const express = require('express')
const OngsController = require('../controllers/ongsController')
const IncidentsController = require('../controllers/incidentsController')
const ProfileController = require('../controllers/profileController')
const SessionController = require('../controllers/sessionController')

const routes = express.Router()

routes.post('/sessions', SessionController.create)
routes.post('/ongs', OngsController.create)
routes.post('/incidents', IncidentsController.create)

routes.get('/ongs', OngsController.index)
routes.get('/incidents', IncidentsController.index)
routes.get('/profile', ProfileController.index)

routes.delete('/incidents/:id', IncidentsController.delete)

module.exports = routes