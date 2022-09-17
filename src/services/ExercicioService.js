const db = require('../mysql'); // Conexao a base de dados

module.exports = {

	// Funcao para visualizar todos os exercícios
	buscarTodos: () => {
		return new Promise((aceito, rejeitado)=>{
			db.query('SELECT * FROM exercicios', (error, results)=>{
				if(error){rejeitado(error); return;}
				aceito(results);
			});
		});
	},


	// Funcao para visualizar um exercício
	buscarUm:(id) => {
		return new Promise((aceito, rejeitado) => {
			db.query('SELECT * FROM exercicios WHERE id = ? ', [id], (error, results) => {
				if(error){rejeitado(error); return;}
				if(results.length > 0){
					aceito(results[0]);
				} else {
					aceito(false);
				}
			});
		});
	},

	// Funcao para inserir exercício
	inserir: (nome_exercicio, nome_equipamento, nome_dificuldade, nome_musculo, link_url)=> {
		return new Promise( (aceito, rejeitado) => {
			db.query('INSERT INTO exercicios (nome_exercicio, nome_equipamento, nome_dificuldade, nome_musculo, link_url) VALUES(?,?,?,?,?); INSERT INTO ?? (nome_exercicio, nome_equipamento, nome_dificuldade, nome_musculo, link_url) VALUES (?,?,?,?,?); INSERT INTO ?? (nome_exercicio, nome_equipamento, nome_dificuldade, nome_musculo, link_url) VALUES (?,?,?,?,?); INSERT INTO ?? (nome_exercicio, nome_equipamento, nome_dificuldade, nome_musculo, link_url) VALUES (?,?,?,?,?);',
				[
					nome_exercicio, nome_equipamento, nome_dificuldade, nome_musculo, link_url,
					nome_musculo, nome_exercicio, nome_equipamento, nome_dificuldade, nome_musculo, link_url,
					nome_equipamento, nome_exercicio, nome_equipamento, nome_dificuldade, nome_musculo, link_url,
					nome_dificuldade, nome_exercicio, nome_equipamento, nome_dificuldade, nome_musculo, link_url
				],
				(error, results)=>{
					if(error){ rejeitado(error); return; }
					aceito(results.insertId);
				}
			);
		})
	},


	// Funcao para alterar um exercício
	alterar: (id, nome_exercicio, nome_equipamento, nome_dificuldade, nome_musculo, link_url)=> {
		return new Promise( (aceito, rejeitado) => {
			db.query('UPDATE exercicios SET nome_exercicio = ?, nome_equipamento = ?, nome_dificuldade = ?, nome_musculo = ?, link_url = ? WHERE id = ?',
				[nome_exercicio, nome_equipamento, nome_dificuldade, nome_musculo, link_url, id],
				(error, results)=>{
					if(error){ rejeitado(error); return; }
					aceito(results);
				}
			);
		})
	},

	// Funcao para apagar um exercício
	apagar:(id) => {
		return new Promise( (aceito, rejeitado) => {
			db.query('DELETE FROM exercicios WHERE id = ?', [id], (error, results) => {
				if(error){rejeitado(error); return; }
				aceito(results);
			})
		})
	}

}
