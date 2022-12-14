const DificuldadesService = require('../services/DificuldadesService');

module.exports = {

	// Visualizar todos os dados existentes da tabela Dificuldades
	visualizarTodos: async(req, res) => {
		let json = {error: '', result:[]};

		// Chamar o serviçe visualizar todos
		let dificuldade = await DificuldadesService.visualizarTodos();

		// Percorre por cada dado e insere para o json
		for(let i in dificuldade){
			json.result.push({
				id: dificuldade[i].id,
				nome: dificuldade[i].nome
			});
		}

		// Resposta do servidor json
		res.json(json);
	}
}