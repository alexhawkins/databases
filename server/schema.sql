CREATE DATABASE chat;
USE chat;

DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS rooms;

CREATE TABLE messages (
  id INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  user_id INTEGER NULL DEFAULT NULL,
  room_id INTEGER NULL DEFAULT NULL,
  text VARCHAR(150) NULL DEFAULT NULL,
  created_at DATETIME NULL DEFAULT NOW(),
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  name VARCHAR(150) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  name VARCHAR(150) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

