/* Remover UNIQUE  para ter possibilidade de ter mesmo nome de exercício mas equipamentos ou dificuldades ou musculos diferentes */
ALTER TABLE `BrowseMuscle`.`exercicios` DROP INDEX `nome_exercicio`, ADD INDEX `nome_exercicio` (`nome_exercicio`) USING BTREE;