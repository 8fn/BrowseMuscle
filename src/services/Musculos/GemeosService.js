const db = require('../../mysql');

module.exports = {

	// Funcao para visualizar os exercícios gemeos
	visualizarTodos: () => {
		return new Promise( (aceito, rejeitado) =>{
			db.query('SELECT * FROM gemeos', (error, results) => {
				if(error){rejeitado(error); return;}
				aceito(results);
			})
		})
	}
}