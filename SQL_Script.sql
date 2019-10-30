CREATE DATABASE cadastro
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;

CREATE TABLE info (
razao VARCHAR(50), 
nomef VARCHAR(50), 
cnpj DECIMAL, 
email VARCHAR(50), 
endereco VARCHAR(60), 
cidade VARCHAR(60), 
estado VARCHAR(30), 
tel VARCHAR(15), 
dia DATE, 
categoria VARCHAR(20), 
stat VARCHAR(10), 
agencia VARCHAR(10), 
conta VARCHAR(10)
) DEFAULT CHARSET = UTF8;
