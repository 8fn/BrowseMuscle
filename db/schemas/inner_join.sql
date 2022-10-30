SELECT exercicios.id, exercicios.nome AS exercicio, equipamentos.nome as equipamento, dificuldades.nome as dificuldade, musculos.nome as musculo, exercicios.equipamento_id, exercicios.dificuldade_id, exercicios.musculo_id FROM exercicios JOIN equipamentos ON exercicios.equipamento_id = equipamentos.id JOIN dificuldades ON exercicios.dificuldade_id = dificuldades.id JOIN musculos ON exercicios.musculo_id = musculos.id