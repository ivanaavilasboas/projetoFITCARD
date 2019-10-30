-- ----------------------------------------------------------------------------
-- MySQL Workbench Migration
-- Migrated Schemata: cadastro
-- Source Schemata: cadastro2
-- Created: Tue Oct 29 20:50:10 2019
-- Workbench Version: 8.0.18
-- ----------------------------------------------------------------------------

SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------------------------------------------------------
-- Schema cadastro
-- ----------------------------------------------------------------------------
DROP SCHEMA IF EXISTS `cadastro` ;
CREATE SCHEMA IF NOT EXISTS `cadastro` ;

-- ----------------------------------------------------------------------------
-- Table cadastro.info
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `cadastro`.`info` (
  `razao` VARCHAR(50) NOT NULL,
  `nomef` VARCHAR(50) NULL DEFAULT NULL,
  `cnpj` DECIMAL(10,0) NOT NULL,
  `email` VARCHAR(50) NULL DEFAULT NULL,
  `endereco` VARCHAR(60) NULL DEFAULT NULL,
  `cidade` VARCHAR(60) NULL DEFAULT NULL,
  `estado` VARCHAR(30) NULL DEFAULT NULL,
  `tel` VARCHAR(15) NULL DEFAULT NULL,
  `dia` DATE NULL DEFAULT NULL,
  `categoria` VARCHAR(20) NULL DEFAULT NULL,
  `stat` VARCHAR(10) NULL DEFAULT NULL,
  `agencia` VARCHAR(10) NULL DEFAULT NULL,
  `conta` VARCHAR(10) NULL DEFAULT NULL,
  PRIMARY KEY (`cnpj`))
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8;
SET FOREIGN_KEY_CHECKS = 1;
