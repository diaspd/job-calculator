// biblioteca pra criar o server
const express = require('express');
//parte do express que cria rotas
const routes = express.Router()	
const ProfileController = require('./controllers/Profile.Controller')
const JobController = require('./controllers/JobController');
const DashboardController = require('./controllers/DashboardController');

//request, responseviews + 
routes.get('/', DashboardController.index)
routes.get('/job', JobController.create)
routes.post('/job', JobController.save)
routes.get('/job/:id', JobController.show)
routes.post('/job/:id', JobController.update)
routes.post('/job/delete/:id', JobController.delete)
routes.get('/profile', ProfileController.index)
routes.post('/profile', ProfileController.update)


module.exports = routes;