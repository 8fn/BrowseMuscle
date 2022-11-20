// Os controladores tratam de toda a lógica por trás da validação de parâmetros de solicitação, consulta e envio de respostas.
// Os serviços contém as consultas á base de dados e objetos a retornar ou lançar erros

const express = require('express');
const api = express.Router();
const path = require('path');

// Controllers
const DificuldadeController = require('../controllers/Dificuldades/DificuldadesController');
const EquipamentosController = require('../controllers/Equipamentos/EquipamentosController');
const ExercicioController = require('../controllers/ExercicioController')
const MusculoController = require('../controllers/Musculos/MusculoController');
const UtilizadoresController = require('../controllers/Utilizadores/UtilizadorController');
const AlimentoController = require('../controllers/Alimentos/AlimentoController');

api.get('/exercicios', ExercicioController.buscarTodos) 	                                        // Rota do método GET para visualizar todos os exercícios
api.get('/exercicio/:id', ExercicioController.buscarUm);	                                        // Rota do método GET para visualizar apenas um exercício~
api.get('/exercicios_equipamento/:equipamento_id', ExercicioController.buscarEquipamento);          // Rota do método GET para visualizar todos os exercícios de um determinado equipamento
api.get('/exercicios_dificuldade/:dificuldade_id', ExercicioController.buscarDificuldade);          // Rota do método GET para visualizar todos os exercícios de uma determinada dificuldade
api.get('/exercicios_musculo/:musculo_id', ExercicioController.buscarMusculo);                      // Rota o método GET para visualizar todos os exercícios de um determinado músculo
api.post('/exercicio', ExercicioController.inserir);		                                        // Rota do método POST para inserir exercício
api.put('/exercicio/:id', ExercicioController.alterar);	                                            // Rota do método PUT para alterar exercício
api.delete('/exercicio/:id', ExercicioController.apagar);                                           // Rota do método DELETE para apagar um exercício

// Músculos, Dificuldades e equipamentos
api.get('/musculos', MusculoController.visualizarTodos);	                                        // Rota do método GET para visualizar todos os músculos existentes
api.get('/dificuldades', DificuldadeController.visualizarTodos);                                    // Rota do método GET para visualizar todas as dificuldades existentes
api.get('/equipamentos', EquipamentosController.visualizarTodos);                                   // Rota do método GET para visualizar todos os equipamentos existentes

api.get('/utilizadores', UtilizadoresController.buscarTodos);                                       // Rota do método GET para visualizar todos os utilizadores existentes
api.get('/utilizador/:id', UtilizadoresController.buscarUm);                                        // Rota do método GET para visualizar somente um utilizador através do ID
api.post('/utilizadores', UtilizadoresController.criar)                                             // Rota do método POST para criar um novo utilizador
api.post('/utilizador/login', UtilizadoresController.login)                                         // Rota do método POST para validar a conta
api.get('/utilizador_username/:username', UtilizadoresController.buscarUsername);
api.get('/utilizador_email/:email', UtilizadoresController.buscarEmail);

api.get('/alimentos', AlimentoController.visualizarTodos);                                          // Rota do método GET para visualizar todos os alimentos
api.get('/alimento/:id', AlimentoController.buscarUm);                                              // Rota do método GET para visualizar somente um alimento
api.post('/alimento/', AlimentoController.inserir);                                                 // Rota do método POST para inserir um alimento
api.put('/alimento/:id', AlimentoController.alterar);                                               // Rota do método PUT para alterar um alimento
api.delete('/alimento/:id', AlimentoController.apagar);                                             // Rota do método DELETE para apagar um alimento
module.exports = api;
