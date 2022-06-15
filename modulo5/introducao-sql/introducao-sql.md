#### Exercício 01
a)**O atributo ID é um tipo VARCHAR (string no banco de dados) e tambem chave primária ,ou seja, um atributo unico na tabela.**
b) **O comando SHOW DATABASES mostra todos os bancos de dados criados, enquanto SHOW TABLES mostra todas as tabelas criadas de um banco de dados.**
c) **O Comando ESCRIBE mostra todas as colunas com seu respectivos atributos.**

#### Exercício 02
a)INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1.200000,
  "1963-08-23", 
  "male"
);
b) Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
**Não é possivel ter 2 registros com a mesma chave primária**

c)Error Code: 1136. Column count doesn't match value count at row 1
**foi passado mais valores do que só(id, name, salary),sendo que o sistema espera recer somente 3 valores**
INSERT INTO Actor
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

d)Error Code: 1364. Field 'name' doesn't have a default value
**não foi passado um valor para name que não pode ser null**

INSERT INTO Actor (id,name, salary, birth_date, gender)
VALUES(
  "004",
  "Carlos",
  400000,
  "1949-04-18", 
  "male"
);
e)Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
**A data não foi passada com  ""**
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
f)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006",   
  "Cláudia Rodrigues",
  300000,
  "1970-06-07", 
  "female"
);

####  Exercício 03
a) SELECT * from Actor WHERE gender = "female";
b)SELECT salary from Actor WHERE name = "Tony Ramos";
c)SELECT * from Actor WHERE gender = "invalid";
**não retornou nada  porque não existe ninguém com  parâmetro gender= "invalid"**

d)
SELECT id, name,salary from Actor WHERE salary < 500000;
e)foi informado o nome da coluna errado.
SELECT id, name from Actor WHERE id = "002";

####  Exercício 04

a)UPDATE Actor SET gender="female",salary=1200000 WHERE id = "002";
DELETE FROM Actor WHERE id="004";

#### Desafio
SELECT id, name from Actor WHERE name like "A%"OR name like"J%" AND salary >500000 ;


