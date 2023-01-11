const db = require('../mysql');

module.exports = {

	// Serviço para inserir e criar sessão de treino
	criar: (nome, descricao, userid) => {
		return new Promise((aceito, rejeitado) => {
			db.query('INSERT INTO Sessao_Treinos (nome, descricao, utilizador_id) VALUES(?,?,?);',
				[
					nome, descricao, userid
				],
				(error, results) => {
					if (error) { rejeitado(error); return; }
					aceito(results.insertId);
				}
			);
		})
	},


    buscarTodos_user: (id) => {
		return new Promise((aceito, rejeitado) => {
			db.query('SELECT * FROM Sessao_Treinos WHERE utilizador_id = ?', [id], (error, results) => {
				if (error) { rejeitado(error); return; }
				aceito(results);
			});
		});
	},

	buscarTodos_user_nome: (userid, id) => {
		return new Promise((aceito, rejeitado) => {
			db.query('SELECT * FROM Sessao_Treinos WHERE utilizador_id = ? AND nome = ?', 
			[userid, id], (error, results) => {
				if (error) { rejeitado(error); return; }
				aceito(results);
			});
		});
	},

	buscarUm: (id) => {
		return new Promise((aceito, rejeitado) => {
			db.query('SELECT * FROM Sessao_Treinos WHERE id=?', [id], (error, results) => {
				if (error) { rejeitado(error); return; }
				aceito(results);
			});
		});
	},

	apagar: (id) => {
		return new Promise((aceito, rejeitado) => {
			db.query('DELETE FROM Sessao_Treinos WHERE id = ?', [id], (error, results) => {
				if (error) { rejeitado(error); return; }
				aceito(results);
			})
		})
	}
}