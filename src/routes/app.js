// Rotas para as páginas

const express = require('express');
const app = express.Router();
const path = require('path');
const passport = require('passport');

// Controllers
const ExercicioController = require('../controllers/ExercicioController')
const AlimentoController = require('../controllers/Alimentos/AlimentoController')

const initializePassport = require('../passport-config');
const UtilizadoresService = require('../services/Utilizadores/UtilizadoresService');

initializePassport(
	passport,
	async username => await UtilizadoresService.buscarUsername(username),
	async id => await UtilizadoresService.buscarUm(id)
)

// Rota para visualizar exercícios
app.get('/exercicios', ExercicioController.view)
app.post('/exercicios/pesquisa', ExercicioController.pesquisarExercicio);

// Rota para visualizar alimentos
app.get('/alimentos', AlimentoController.view);

app.get('/meu_perfil', checkAuthenticated, function(req, res) {
	res.render('app/utilizador/perfil.hbs', { username: req.user.username })
})

function checkAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }

    res.redirect('/auth/login')
}

function checkNotAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return res.redirect('/meu_perfil');
    }
    next();
}

// Rota para página principal
app.get('/', function(req, res){
	res.render('app/homepage', {
		title: "Bem vindo ao BrowseMuscle! 🌎"
	});
})

app.get('/musculos', function(req, res){
	res.render('app/musculos')
})

// Visualização da tabela exercícios para peito
app.get('/peito', function(req, res){
	res.render('app/musculos/peito', {layout: 'tabelas'})
})

// Visualização da tabela exercícios para ombros
app.get('/ombro', function(req, res){
	res.render('app/musculos/ombros', {layout: 'tabelas'})
})

// Visualização da tabela exercícios para triceps
app.get('/tricep', function(req, res){
	res.render('app/musculos/triceps', {layout: 'tabelas'})
})

// Visualização da tabela exercícios para biceps
app.get('/bicep', function(req, res){
	res.render('app/musculos/biceps', {layout: 'tabelas'})
})

// Visualização da tabela exercícios para costas
app.get('/costas', function(req, res){
	res.render('app/musculos/costas', {layout: 'tabelas'})
})

// Visualização da tabela exercícios para abdominais
app.get('/abdominais', function(req, res){
	res.render('app/musculos/abdominais', {layout: 'tabelas'})
})

// Visualização da tabela exercícios para antebraco
app.get('/antebraco', function(req, res){
	res.render('app/musculos/antebraco', {layout: 'tabelas'})
})

// Visualização da tabela exercícios para dorsais
app.get('/dorsal', function(req, res){
	res.render('app/musculos/dorsais', {layout: 'tabelas'})
})

// Visualização da tabela exercícios para gémeos
app.get('/gemeo', function(req, res){
	res.render('app/musculos/gemeos', {layout: 'tabelas'})
})

// Visualização da tabela exercícios para quadriceps
app.get('/quadricep', function(req, res){
	res.render('app/musculos/quadriceps', {layout: 'tabelas'})
})

// Visualização da tabela exercícios para traps
app.get('/trapezio', function(req, res){
	res.render('app/musculos/traps', {layout: 'tabelas'})
})

// Visualização da tabela exercícios para hamstrings
app.get('/hamstring', function(req, res){
	res.render('app/musculos/hamstrings', {layout: 'tabelas'})
})

// Visualização da tabela exercícios para gluteo
app.get('/gluteo', function(req, res){
	res.render('app/musculos/gluteos', {layout: 'tabelas'})
})

// Tabela equipamentos para selecionar
app.get('/equipamentos', function(req, res){
	res.render('app/equipamentos', {layout: 'tabelas'})
})

// Visualização da tabela exercícios com barra
app.get('/barra', function(req, res){
	res.render('app/equipamentos/barra', {layout: 'tabelas'})
})

// Visualização da tabela exercícios com maquina
app.get('/maquina', function(req, res){
	res.render('app/equipamentos/maquina', {layout: 'tabelas'})
})

// Visualização da tabela exercícios com cabos
app.get('/cabos', function(req, res){
	res.render('app/equipamentos/cabos', {layout: 'tabelas'})
})

// Visualização da tabela exercícios com halteres
app.get('/halteres', function(req, res){
	res.render('app/equipamentos/halteres', {layout: 'tabelas'})
})

// Visualização da tabela exercícios com peso corporal
app.get('/peso%20corporal', function(req, res){
	res.render('app/equipamentos/peso_corporal', {layout: 'tabelas'})
})

// Visualização da tabela exercícios iniciante
app.get('/iniciante', function(req, res){
	res.render('app/dificuldades/iniciante', {layout: 'tabelas'})
})

// Visualização da tabela exercícios intermediario
app.get('/intermediario', function(req, res){
	res.render('app/dificuldades/intermediario', {layout: 'tabelas'})
})

// Visualização da tabela exercícios avancado
app.get('/avancado', function(req, res){
	res.render('app/dificuldades/avancado', {layout: 'tabelas'})
})


// Rota para a página principal
app.get('/pagina_principal', function(req, res){
	res.render('app/index', {layout: false})
})


module.exports = app;
