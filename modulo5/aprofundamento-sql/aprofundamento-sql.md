### Exercicío 01
a)O comando  ALTER TABLE Actor DROP COLUMN salary; exclui a coluna salary da tabela Actor
b)O comando ALTER TABLE Actor MODIFY gender VARCHAR(6); modifica o tipo da coluna gender para string de até 6 caracteres
c) ALTER TABLE Actor MODIFY gender VARCHAR(100);

### Exercício 02
a)
UPDATE Actor
SET name = "Moacyr Franco", birth_date="2020-02-10"
WHERE id = "003";
b)
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor   
SET name = "Juliana Paes"
WHERE name ="JULIANA PAES";

c)
UPDATE Actor   
SET name = "Rodrigo Santoro" ,birth_date="1975/08/22",gender="male",salary= 380.000
WHERE id ="005";

d)
 UPDATE Actor   
SET name= "Rodrigo Santoro" ,birth_date="1975/08/22",gender="male",salary= 380.000
WHERE id ="00555555";
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
passando um id inválido  não alteração na tabela

### Exercício 03

a) DELETE FROM Actor WHERE name = "Fernanda Montenegro";
b)DELETE FROM Actor WHERE gender="male" AND salary> 1000000;

### Exercício 04

a) SELECT MAX(salary) FROM Actor;
b) SELECT MIN(salary) FROM Actor WHERE gender="female";
c)SELECT COUT(*) FROM Actor WHERE gender="female";
d)SELECT SUM(salary) FROM Actor ;

### Exercício 05

a) A query retornou a quantidade de registros agrupados por sexo,ou seja, quatos registros há por sexo
b)
SELECT id,name
FROM Actor
ORDER BY  name desc;
c)
SELECT *
FROM Actor
ORDER BY  salary ;
d)
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
e)
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

### Exercício 06

a) 
ALTER TABLE Movie ADD playing_limit_date DATE;

b)
ALTER TABLE Movie CHANGE rating rating FLOAT;
c)
UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001";
d)

### Exercício 07

a)
SELECT COUNT(*) FROM Movie WHERE rating > 7.5;
b)
SELECT AVG(rating) FROM Movie;
c)
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
d)
SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();
e)
SELECT MAX(rating) FROM Movie;
f)
SELECT MIN(rating) FROM Movie;

### Exercício 08

a)
SELECT * FROM Movie ORDER BY title;
b)
SELECT * FROM Movie ORDER BY title LIMIT 5;
c)
SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;
d)
SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 3;