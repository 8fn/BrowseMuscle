const db = require('../../mysql');

module.exports = {

	// Funcao para visualizar os exercícios para abdominais
	visualizarTodos: () => {
		return new Promise( (aceito, rejeitado) =>{
			db.query('SELECT * FROM abdominais', (error, results) => {
				if(error){rejeitado(error); return;}
				aceito(results);
			})
		})
	}
}