DROP DATABASE IF EXISTS greatbay;

CREATE DATABASE greatbay;

USE greatbay;

CREATE TABLE `greatbay`.`users` (
  `id` INT NOT NULL,
  `username` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `greatbay`.`items` (
  `id` INT(255) NOT NULL,
  `name` VARCHAR(45) NULL,
  `desciption` VARCHAR(45) NULL,
  `bid` FLOAT(2) NULL,
  `bidder` VARCHAR(45) NULL,
  `seller` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));