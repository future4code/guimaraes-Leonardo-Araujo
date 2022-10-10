-- Active: 1656453374144@@35.226.146.116@3306@guimaraes-4211333-leonardo-araujo
CREATE TABLE IF NOT EXISTS dog_walking (
  id VARCHAR(255) PRIMARY KEY,
  status VARCHAR(255)  NOT NULL DEFAULT"Agendada",
  data_agendamento VARCHAR(255) NOT NULL,
  preco INT  NOT NULL ,
  duracao  VARCHAR(255)  NOT NULL,
  latitude FLOAT  NOT NULL ,
  longitude  FLOAT  NOT NULL ,
  
  horario_inicio TIME NOT NULL DEFAULT "00:00" ,
  horario_termino TIME NOT NULL DEFAULT "00:00"
);

CREATE TABLE IF NOT EXISTS pets_walking (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  id_dono VARCHAR(255) NOT NULL,
  id_walking VARCHAR(255) NOT NULL,
FOREIGN KEY (id_walking) REFERENCES dog_walking(id),
FOREIGN KEY (id_dono) REFERENCES dog_user(id)
  
);

CREATE TABLE IF NOT EXISTS dog_user (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL DEFAULT "NORMAL"
);

