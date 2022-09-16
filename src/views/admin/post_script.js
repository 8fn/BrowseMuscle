fetch('http://localhost:3000/api/exercicio/', {
	method: 'POST',
	headers: {
			'Content-Type': 'application/json'
	},

	body: JSON.stringify({
		nome_exercicio: 'Supino',
		nome_equipamento: 'barra',
		nome_dificuldade: 'avancado',
		nome_musculo: 'peito'
	})
})
	.then(res => {
		return res.json()
	})
	.then(data => console.log(data))
	.catch(error => console.log('Error.'))