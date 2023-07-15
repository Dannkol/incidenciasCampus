
DROP DATABASE IF EXISTS `Campus`;

CREATE DATABASE `Campus`;

USE `campus`;

CREATE TABLE `tipoDocumento` (
    `id` int(11) PRIMARY KEY AUTO_INCREMENT,
    `nombre` VARCHAR(150) NOT NULL,
    `abreviacion` VARCHAR(50) NOT NULL
);

CREATE TABLE `infoEmpresarial` (
    `id` int(11) PRIMARY KEY AUTO_INCREMENT,
    `emailCoor` VARCHAR(150) NOT NULL,
    `telFijoCoor` VARCHAR(150) NOT NULL,
    `telMovCoor` VARCHAR(150) NOT NULL
);

CREATE TABLE `usuarios` (
    `id` int(11) PRIMARY KEY AUTO_INCREMENT,
    `nombre` VARCHAR(150) NOT NULL,
    `apellidos` VARCHAR(150) NOT NULL,
    `password` VARCHAR(150) NOT NULL,
    `tipoDocumento_id` int(11) NOT NULL,
    `infoEmpresarial_id` int(11) NOT NULL UNIQUE,
    CONSTRAINT `fk_tipoDocumento` 
    FOREIGN KEY (`tipoDocumento_id`) REFERENCES `tipoDocumento` (`id`),
    CONSTRAINT `fk_infoEmpresarial` 
    FOREIGN KEY (`infoEmpresarial_id`) REFERENCES `infoEmpresarial` (`id`)
);

-- Areas y lugares

CREATE TABLE `lugares` (
    `id` int(11) PRIMARY KEY AUTO_INCREMENT,
    `nombre` VARCHAR(150) NOT NULL,
    `descripcion` VARCHAR(255) NOT NULL
);

-- un lugar esta asignado a una sola area

CREATE TABLE `areas` (
    `id` int(11) PRIMARY KEY AUTO_INCREMENT,
    `nombre` VARCHAR(150) NOT NULL,
    `descripcion` VARCHAR(255) NOT NULL,
    `lugar_id` int(11) NOT NULl UNIQUE,
    CONSTRAINT `fk_lugar`
    FOREIGN KEY (`lugar_id`) REFERENCES `lugares` (`id`)
);

-- un usuario puede estar asignado a muchos lugares y un lugar a muchos usuarios

CREATE TABLE `usuarios_lugares` (
    `lugares_id` int(11) NOT NULL,
    `usuarios_id` int(11) NOT NULL,
    PRIMARY KEY (`lugares_id`, `usuarios_id`),
    CONSTRAINT `fk_lugares`
    FOREIGN KEY (`lugares_id`) REFERENCES `lugares` (`id`),
    CONSTRAINT `fk_usuarios`
    FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`)
);

-- Equipos en los lugares


CREATE TABLE `equipos`(
    `id` int(11) PRIMARY KEY AUTO_INCREMENT,
    `nombre` VARCHAR(150) NOT NULL,
    `descripcion` VARCHAR(255) NOT NULL,
    `lugar_id` int(11) NOT NULl UNIQUE,
    CONSTRAINT `fk_lugar_equipo`
    FOREIGN KEY (`lugar_id`) REFERENCES `lugares` (`id`)
);

CREATE TABLE `accesorio_teclado` (
    `id` int(11) PRIMARY KEY AUTO_INCREMENT,
    `marca` VARCHAR(150) NOT NULL,
    `descripcion` VARCHAR(255) NOT NULL
);

CREATE TABLE `accesorio_mouse` (
    `id` int(11) PRIMARY KEY AUTO_INCREMENT,
    `marca` VARCHAR(150) NOT NULL,
    `descripcion` VARCHAR(255) NOT NULL
);

CREATE TABLE `accesorio_diademas` (
    `id` int(11) PRIMARY KEY AUTO_INCREMENT,
    `marca` VARCHAR(150) NOT NULL,
    `descripcion` VARCHAR(255) NOT NULL
);


CREATE TABLE `equipos_acc_lugar` (
    `equipos_id` int(11) NOT NULL,
    `accesorios_mouse_id` int(11) NOT NULL,
    `accesorios_teclado_id` int(11) NOT NULL,
    `accesorios_diademas_id` INT(11) NOT NULL,
   

    PRIMARY KEY (`equipos_id`, `accesorios_teclado_id` ,`accesorios_mouse_id`, `accesorios_diademas_id`),



    CONSTRAINT `fk_acc_equipo`
    FOREIGN KEY (`equipos_id`) REFERENCES `equipos` (`id`),

    CONSTRAINT `fk_acc_mouse`
    FOREIGN KEY (`accesorios_mouse_id`) REFERENCES `accesorio_mouse` (`id`),

    CONSTRAINT `fk_acc_teclado`
    FOREIGN KEY (`accesorios_teclado_id`) REFERENCES `accesorio_teclado` (`id`),

    CONSTRAINT `fk_acc_diademas`
    FOREIGN KEY (`accesorios_diademas_id`) REFERENCES `accesorio_diademas` (`id`)
);

-- Insidencias

CREATE TABLE `insidencia_categoria` (
    `id` INT(11) NOT NULL PRIMARY KEY,
    `nombre` VARCHAR(150) NOT NULL,
    `descripcion` VARCHAR(255) NOT NULL
);

CREATE TABLE `insidencia_nivel` (
    `id` INT(11) NOT NULL PRIMARY KEY,
    `nombre` VARCHAR(150) NOT NULL
);

CREATE TABLE `insidencias`(
    `id` int(11) PRIMARY KEY AUTO_INCREMENT,
    `nombre` VARCHAR(150) NOT NULL,
    `descripcion` VARCHAR(255) NOT NULL,
    `equipo_id` INT(11) NOT NULL,
    `lugar_id` int(11) NOT NULL,
    `fecha` TIMESTAMP(2) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `nivel_id` int(11) NOT NULL,
    `categoria_id` int(11) NOT NULL,

    
    CONSTRAINT `fk_equipo_insidencia` 
    FOREIGN KEY (`equipo_id`) REFERENCES `equipos` (`id`),
    
    CONSTRAINT `fk_lugares_insidencia`
    FOREIGN KEY (`lugar_id`) REFERENCES `lugares` (`id`),
    
    CONSTRAINT `fk_insidencia_nivel`
    FOREIGN KEY (`nivel_id`) REFERENCES `insidencia_nivel` (`id`),

    CONSTRAINT `fk_insidencia_categoria`
    FOREIGN KEY (`categoria_id`) REFERENCES `insidencia_categoria` (`id`)
);

CREATE TABLE `Historial_insidencia_usuarios` (
    `usuario_id` int(11) NOT NULL,
    `insidencia_id` int(11) NOT NULL,
    PRIMARY KEY (`usuario_id`, `insidencia_id`),
    CONSTRAINT `fk_usuarios_insidencia`
    FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
    CONSTRAINT `fk_insidencias_usuarios`
    FOREIGN KEY (`insidencia_id`) REFERENCES `insidencias` (`id`)
)