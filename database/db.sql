CREATE DATABASE fendepcldb;

USE fendepcldb;

CREATE TABLE IF NOT EXISTS `fendepcldb`.`user_acc` (
  `id_user` INT(10) NOT NULL AUTO_INCREMENT,
  `user_acc` VARCHAR(45) NOT NULL,
  `user_pw` VARCHAR(45) NOT NULL,
  `create_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_user`),
  UNIQUE INDEX `user_acc_UNIQUE` (`user_acc` ASC) VISIBLE,
  UNIQUE INDEX `id_user_UNIQUE` (`id_user` ASC) VISIBLE)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `fendepcldb`.`team` (
  `id_team` INT(7) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `especialidad` VARCHAR(45) NOT NULL,
  `region` VARCHAR(45) NULL,
  PRIMARY KEY (`id_team`),
  UNIQUE INDEX `id_team_UNIQUE` (`id_team` ASC) VISIBLE)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `fendepcldb`.`user_info` (
  `id_user_info` INT(10) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NULL,
  `dob` DATE NOT NULL,
  `user_type` ENUM('admin', 'user', 'god') NOT NULL,
  `id_userfk1` INT(10) NOT NULL,
  PRIMARY KEY (`id_user_info`),
  UNIQUE INDEX `id_userfk1_UNIQUE` (`id_userfk1` ASC) VISIBLE,
  UNIQUE INDEX `id_user_info_UNIQUE` (`id_user_info` ASC) VISIBLE,
  CONSTRAINT `id_userfk1`
    FOREIGN KEY (`id_userfk1`)
    REFERENCES `fendepcldb`.`user_acc` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `fendepcldb`.`user_info2` (
  `id_user_info2` INT(10) NOT NULL AUTO_INCREMENT,
  `id_userfk2` INT(10) NOT NULL,
  `id_teamfk3` INT(10) NOT NULL,
  `email` VARCHAR(45) NULL,
  `phone` VARCHAR(12) NULL,
  PRIMARY KEY (`id_user_info2`),
  UNIQUE INDEX `id_user_info2_UNIQUE` (`id_user_info2` ASC) VISIBLE,
  UNIQUE INDEX `id_userfk2_UNIQUE` (`id_userfk2` ASC) VISIBLE,
  UNIQUE INDEX `id_teamfk3_UNIQUE` (`id_teamfk3` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `phone_UNIQUE` (`phone` ASC) VISIBLE,
  CONSTRAINT `id_userfk2`
    FOREIGN KEY (`id_userfk2`)
    REFERENCES `fendepcldb`.`user_acc` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_teamfk3`
    FOREIGN KEY (`id_teamfk3`)
    REFERENCES `fendepcldb`.`team` (`id_team`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;