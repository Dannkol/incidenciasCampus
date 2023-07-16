
USE `campus`;

INSERT INTO `insidencia_nivel` (`id`,`nombre`) VALUES 
(1 , 'level'),
(2 , 'moderada'),
(3 , 'critica');

INSERT INTO `insidencia_categoria` (`id`,`nombre`,`descripcion`) VALUES 
(1 , 'software', 'todas las insidencias relacionadas con software en la maquina'),
(2 , 'hardware', 'todas las insidencias relacionadas con hardware en la maquina');

INSERT INTO `tipodocumento` (`nombre`, `abreviacion`) VALUES
('Cedula de ciudadania', 'CC'),
('Tarjeta de identidad', 'TI'),
('Pasaporte', 'PS'),
('Cedula de Extrangeria', 'CE');

INSERT INTO `lugares` (`nombre`, `descripcion`) VALUES
('apolo', 'Salon de clase'),
('artemis', 'Salon de clase'), 
('sputnik', 'Salon de clase'), 
('skylab', 'Salon de clasa para aprendizaje autonomo'),
('corvus', 'Salon de clasa para aprendizaje autonomo'),
('endor', 'Salon de clasa para aprendizaje autonomo');

INSERT INTO `areas` (`nombre`, `descripcion`) VALUES
('training', 'Salones de clases, son el area donde los trainer pueden dar clases'),
('review_1', 'Salones para el aprendiza autonomo'),
('review_2', 'Salones para el aprendiza autonomo');

INSERT INTO `lugares_areas` (`lugar_id`, `area_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 2),
(6, 3);



ALTER TABLE `usuarios`
    ADD COLUMN `telefono` VARCHAR(100) NOT NULL,
    ADD COLUMN `movile` VARCHAR(100) NOT NULL,
    ADD COLUMN `email` VARCHAR(100) NOT NULL;

ALtER TABLE `accesorio_mouse`
    ADD COLUMN `serial` VARCHAR(100) NOT NULL UNIQUE;

ALTER TABLE `accesorio_teclado`
    ADD COLUMN `serial` VARCHAR(100) NOT NULL UNIQUE;

ALtER TABLE `accesorio_diademas`
    ADD COLUMN `serial` VARCHAR(100) NOT NULL UNIQUE;



INSERT INTO `accesorio_mouse` (`marca`, `descripcion`, `serial`) VALUES
    ('Logitech', 'Mouse Logitech', '123456'),
    ('Logitech', 'Mouse Logitech', '123asdw'),
    ('Acer', 'Mouse Acer', '123cw23'),
    ('Compumax', 'Mouse Compumax', '12we56');

INSERT INTO `accesorio_teclado` (`marca`, `descripcion`, `serial`) VALUES
    ('Logitech', 'teclado Logitech', '124426'),
    ('Logitech', 'teclado Logitech', '123as4w'),
    ('Acer', 'teclado Acer', '123cqww3'),
    ('Compumax', 'teclado Compumax', 'eq2123');

INSERT INTO `accesorio_diademas` (`marca`, `descripcion`, `serial`) VALUES
    ('Logitech', 'diademas Logitech', '124426'),
    ('Logitech', 'diademas Logitech', '123as4w'),
    ('Acer', 'diademas Acer', '123cqww3'),
    ('Compumax', 'diademas Compumax', 'eq2123');

INSERT INTO equipos(nombre,descripcion,lugar_id) VALUES
('CP-123','Equipo en perfecto estado',1),
('CP-155','Equipo en perfecto estado',1),
('CP-154','Equipo en perfecto estado',2),
('CP-156','Equipo en perfecto estado',2);



INSERT INTO equipos_acc_lugar(equipos_id,accesorios_mouse_id,accesorios_teclado_id,accesorios_diademas_id) VALUES
(1,1,1,1),
(2,2,2,2),
(3,3,3,3),
(4,4,4,4);


INSERT INTO infoempresarial(id,`emailCoor`,`telFijoCoor`,`telMovCoor`) VALUES
(1,'jholver@campuslands.com','6785868','+579317458962');


INSERT INTO usuarios(id,nombre,apellidos,password, `doc_usuario`,`tipoDocumento_id`,`infoEmpresarial_id`,telefono,movile,email) VALUES
(1,'jholver','rodriguez','12345',12324,1,1,'+1658742','+5734158924','devjgi@gmail.com');

INSERT INTO usuarios_lugares(lugares_id,usuarios_id) VALUES
(1,1);

INSERT INTO insidencias(id,nombre,descripcion,equipo_id,lugar_id,fecha,nivel_id,categoria_id) VALUES
(1,'No enciende','El camper daniel  comento que el pc no encencia, una primera comprovacion muesta que es verdad',1,1,'2023-07-15',3,2);

INSERT INTO historial_insidencia_usuarios(usuario_id,insidencia_id) VALUES
(1,1);