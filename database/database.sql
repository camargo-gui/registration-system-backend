CREATE DATABASE system;
USE system

CREATE TABLE Customer (
  cpf varchar(14) NOT NULL PRIMARY KEY,
  name varchar(255) NOT NULL,
  address_id INT NOT NULL,
  FOREIGN KEY (address_id) REFERENCES Address(id)
);

CREATE TABLE Address (
    id INT PRIMARY KEY AUTO_INCREMENT,
    zip_code VARCHAR(9) NOT NULL,
    street VARCHAR(255) NOT NULL,
    number INT NOT NULL,
    neighborhood VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(2) NOT NULL
);
