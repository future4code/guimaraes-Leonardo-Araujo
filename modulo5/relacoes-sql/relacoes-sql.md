### Exercício 01

a) chave estrangeira é uma referência a chave primária de outra tabela, por onde conseguimos relacionar dados entre várias tabelas diferentes

b) INSERT INTO Rating values("1","Ótimo filme",9.4,"001");

c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`guimaraes-4211333-leonardo-araujo`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
Não é possível criar uma avaliação de um filme que não existe, o mysql verificou na tabela Movie que não exite o filme com id informado e portanto não inseriu o registro.

d)alter table Movie drop column rating;

e)Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`guimaraes-4211333-leonardo-araujo`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

não é possível deletar um filme  que possuí avaliação, porque isso iria gerar inconsistência no banco de dados, teriamos dados relacionados a um filme inexistente.

### Exercício 02

a)É uma tabela intermediária para onde cada registro relaciona um ator a um filme.

b)insert into MovieCast values("005","011");

c)Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`guimaraes-4211333-leonardo-araujo`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
não é possível  criar uma relação com um ator ou filme que não existe,porque isso iria gerar inconsistência no banco de dados,.

d)Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`guimaraes-4211333-leonardo-araujo`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
não é possível deletar um ator que possuí um relacionamento, porque irá gerar  inconsistência.

### Exercício 03

a) O operador ON funciona no join como o WHERE, ele define a condição da query

b) SELECT m.title,m.id,r.rate FROM Movie as m
 JOIN Rating as r
ON m.id = r.movie_id;

### Exercício 04
a) SELECT m.title,m.id,r.rate FROM Movie as m
 left JOIN Rating as r
ON m.id = r.movie_id;

b) SELECT m.id,m.title,mc.actor_id  FROM MovieCast as mc
 left JOIN Movie as m
ON m.id = mc.movie_id;

c) SELECT AVG(r.rate), m.id, m.title FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id);

### Exercício 05

a) Porque o join só consegue comparar 2 tabelas por vez

b) SELECT m.id,m.title,a.id,a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

c) Houve um erro de sintaxe  m,title o correto é m.title

d) SELECT m.id as movie_id, m.title,a.name,r.rate as rating,r.comment FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
left JOIN Actor a ON a.id = mc.actor_id
left join Rating as r on m.id=r.movie_id ;
