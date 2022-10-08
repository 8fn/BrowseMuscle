const express = require('express');
const app = express.Router();
const path = require('path');


// Rota da APP da página principal


app.get('/exercicios', function(req, res) {
	// res.sendFile(path.join(__dirname, '/views/app/index.html'))
	res.render('app/exercicios', {layout: false})
})
/*
app.get('/login', function(req, res){
	res.sendFile(path.join(__dirname, '/views/app/login_registar/login.html'))
})

app.get('/registar', function(req, res){
	res.sendFile(path.join(__dirname, '/views/app/login_registar/registar.html'))
})
*/
app.get('/', function(req, res){
	res.render('app/homepage')
})

app.get('/sobre_nos', function(req, res){
	res.render('app/sobre_nos')
})

app.get('/alimentos', function(req, res){
	res.render('app/alimentos/alimentos', {layout: false})
})

app.get('/musculos', function(req, res){
	res.render('app/musculos', {layout: false})
})

app.get('/peito_exercicios', function(req, res){
	res.render('app/musculos/peito', {layout: false})
})

app.get('/ombros_exercicios', function(req, res){
	res.render('app/musculos/ombros', {layout: false})
})

app.get('/triceps_exercicios', function(req, res){
	res.render('app/musculos/triceps', {layout: false})
})

app.get('/biceps_exercicios', function(req, res){
	res.render('app/musculos/biceps', {layout: false})
})

app.get('/costas_exercicios', function(req, res){
	res.render('app/musculos/costas', {layout: false})
})

app.get('/abdominais_exercicios', function(req, res){
	res.render('app/musculos/abdominais', {layout: false})
})

app.get('/antebraco_exercicios', function(req, res){
	res.render('app/musculos/antebraco', {layout: false})
})

app.get('/dorsais_exercicios', function(req, res){
	res.render('app/musculos/dorsais', {layout: false})
})

app.get('/gemeos_exercicios', function(req, res){
	res.render('app/musculos/gemeos', {layout: false})
})

app.get('/quadriceps_exercicios', function(req, res){
	res.render('app/musculos/quadriceps', {layout: false})
})

app.get('/traps_exercicios', function(req, res){
	res.render('app/musculos/traps', {layout: false})
})

app.get('/hamstrings_exercicios', function(req, res){
	res.render('app/musculos/hamstrings', {layout: false})
})

app.get('/gluteo_exercicios', function(req, res){
	res.render('app/musculos/gluteos', {layout: false})
})

app.get('/equipamentos', function(req, res){
	res.render('app/equipamentos', {layout: false})
})

app.get('/dificuldades', function(req, res){
	res.render('app/dificuldades', {layout: false})
})

module.exports = app;
