const db = require('../../mysql');

module.exports = {

	// Funcao para visualizar a tabela exercícios halteres
	visualizarTodos: () => {
		return new Promise( (aceito, rejeitado) =>{
			db.query('SELECT * FROM halteres', (error, results) => {
				if(error){rejeitado(error); return;}
				aceito(results);
			})
		})
	}
}