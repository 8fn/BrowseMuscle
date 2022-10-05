const AntebracoService = require('../services/AntebracoService');

module.exports = {

	visualizarTodos: async(req, res) => {
		let json = {error: '', result:[]};

		let antebraco = await AntebracoService.visualizarTodos();

		for(let i in antebraco){
			json.result.push({
				id: antebraco[i].id,
				nome_exercicio: antebraco[i].nome_exercicio,
                nome_equipamento: antebraco[i].nome_equipamento,
                nome_dificuldade: antebraco[i].nome_dificuldade,
                nome_musculo: antebraco[i].nome_musculo
			});
		}
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-  Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
		res.json(json);
	}
}