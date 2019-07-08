CREATE DATABASE trex;

USE trex;

CREATE TABLE curso (
  id INT,
  nome VARCHAR(64),
  sigla CHAR(4),
  descricao TEXT,
);

CREATE TABLE user (
  id INT,
  username VARCHAR(255),
  email VARCHAR(255),
  curso INT,
  FOREIGN KEY (curso) REFERENCES curso(id),
);

CREATE TABLE jogada (
  id INT,
  jogador INT,
  pontuacao INT,
  data_jogada VARCHAR(45)
  FOREIGN KEY (jogador) REFERENCES user(id),
);

INSERT INTO curso
VALUES 
(1, 'Ciencia da Computacao', 'CC', 'bla');
-- (2, 'Engenharia de Software', 'ES', 'bla');
