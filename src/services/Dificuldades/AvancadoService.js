const db = require('../../mysql');

module.exports = {

	// Funcao para visualizar a tabela de exercícios avancado
	visualizarTodos: () => {
		return new Promise( (aceito, rejeitado) =>{
			db.query('SELECT * FROM avancado', (error, results) => {
				if(error){rejeitado(error); return;}
				aceito(results);
			})
		})
	}
}