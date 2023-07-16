USE campus;

-- consulta de insidencias
SELECT t1.nombre, t1.descripcion , t5.nombre as 'equipo' , t2.nombre as 'categoria' , t3.nombre as 'nivel', t4.nombre as 'lugar' FROM insidencias AS T1 
INNER JOIN insidencia_categoria AS T2 ON T2.id = T1.categoria_id
INNER JOIN insidencia_nivel AS T3 ON T3.id = T1.nivel_id
INNER JOIN lugares AS T4 ON T4.id = T1.lugar_id
INNER JOIN equipos AS T5 ON T5.id = T1.equipo_id;

-- consulta de insidencias por nivel

SELECT t1.nombre, t1.descripcion , t5.nombre as 'equipo' , t2.nombre as 'categoria' , t3.nombre as 'nivel', t4.nombre as 'lugar' FROM insidencias AS T1 
INNER JOIN insidencia_categoria AS T2 ON T2.id = T1.categoria_id
INNER JOIN insidencia_nivel AS T3 ON T3.id = T1.nivel_id
INNER JOIN lugares AS T4 ON T4.id = T1.lugar_id
INNER JOIN equipos AS T5 ON T5.id = T1.equipo_id
WHERE T3.nombre = 'critica' ;


-- consulta de insidencias por lugar

SELECT t1.nombre, t1.descripcion , t5.nombre as 'equipo' , t2.nombre as 'categoria' , t3.nombre as 'nivel', t4.nombre as 'lugar' FROM insidencias AS T1 
INNER JOIN insidencia_categoria AS T2 ON T2.id = T1.categoria_id
INNER JOIN insidencia_nivel AS T3 ON T3.id = T1.nivel_id
INNER JOIN lugares AS T4 ON T4.id = T1.lugar_id
INNER JOIN equipos AS T5 ON T5.id = T1.equipo_id
WHERE t4.nombre = 'apolo' ;

-- Consulta insidincias y usuarios

SELECT t3.nombre as 'trainer', t2.nombre, t2.descripcion , t7.nombre as 'equipo' , t4.nombre as 'categoria' , t5.nombre as 'nivel', t6.nombre as 'lugar' FROM historial_insidencia_usuarios as t1
INNER JOIN insidencias as t2 ON t1.insidencia_id = t2.id
INNER JOIN usuarios as t3 on t1.usuario_id = t3.id
INNER JOIN insidencia_categoria AS T4 ON T4.id = T2.categoria_id
INNER JOIN insidencia_nivel AS T5 ON T5.id = T2.nivel_id
INNER JOIN lugares AS T6 ON T6.id = T2.lugar_id
INNER JOIN equipos AS T7 ON T7.id = T2.equipo_id;


-- Consulta insidincias y usuarios por nivle

SELECT t3.nombre as 'trainer', t2.nombre, t2.descripcion , t7.nombre as 'equipo' , t4.nombre as 'categoria' , t5.nombre as 'nivel', t6.nombre as 'lugar' FROM historial_insidencia_usuarios as t1
INNER JOIN insidencias as t2 ON t1.insidencia_id = t2.id
INNER JOIN usuarios as t3 on t1.usuario_id = t3.id
INNER JOIN insidencia_categoria AS T4 ON T4.id = T2.categoria_id
INNER JOIN insidencia_nivel AS T5 ON T5.id = T2.nivel_id
INNER JOIN lugares AS T6 ON T6.id = T2.lugar_id
INNER JOIN equipos AS T7 ON T7.id = T2.equipo_id
WHERE T5.nombre = 'critica' ;


-- Consulta insidincias y usuarios por lugar

SELECT t3.nombre as 'trainer', t2.nombre, t2.descripcion , t7.nombre as 'equipo' , t4.nombre as 'categoria' , t5.nombre as 'nivel', t6.nombre as 'lugar' FROM historial_insidencia_usuarios as t1
INNER JOIN insidencias as t2 ON t1.insidencia_id = t2.id
INNER JOIN usuarios as t3 on t1.usuario_id = t3.id
INNER JOIN insidencia_categoria AS T4 ON T4.id = T2.categoria_id
INNER JOIN insidencia_nivel AS T5 ON T5.id = T2.nivel_id
INNER JOIN lugares AS T6 ON T6.id = T2.lugar_id
INNER JOIN equipos AS T7 ON T7.id = T2.equipo_id
WHERE T6.nombre = 'apolo' ;

-- Consulta insidincias y usuarios por equipo

SELECT t3.nombre as 'trainer', t2.nombre, t2.descripcion , t7.nombre as 'equipo' , t4.nombre as 'categoria' , t5.nombre as 'nivel', t6.nombre as 'lugar' FROM historial_insidencia_usuarios as t1
INNER JOIN insidencias as t2 ON t1.insidencia_id = t2.id
INNER JOIN usuarios as t3 on t1.usuario_id = t3.id
INNER JOIN insidencia_categoria AS T4 ON T4.id = T2.categoria_id
INNER JOIN insidencia_nivel AS T5 ON T5.id = T2.nivel_id
INNER JOIN lugares AS T6 ON T6.id = T2.lugar_id
INNER JOIN equipos AS T7 ON T7.id = T2.equipo_id
WHERE T7.nombre = 'CP-123' ;



-- Creacion de usuarios
-- primero creamos sus infoEmpresarial
INSERT INTO infoempresarial(id,`emailCoor`,`telFijoCoor`,`telMovCoor`) VALUES
(1,'jholver@campuslands.com','6785868','+579317458962');

-- Creamos el usuario y asociamar tipo de documento e infoempresarial
INSERT INTO usuarios(id,nombre,apellidos,password, `doc_usuario`,`tipoDocumento_id`,`infoEmpresarial_id`,telefono,movile,email) VALUES
(1,'jholver','rodriguez','12345',12324,1,1,'+1658742','+5734158924','devjgi@gmail.com');


-- Actualizacion de datos de usuario
UPDATE usuarios SET nombre='jholver',apellidos='fernandez' WHERE `id`=1;


-- Crear un nuveba equipo
-- tenemos que crear sus accesorios
INSERT INTO `accesorio_mouse` (`marca`, `descripcion`, `serial`) VALUES
    ('Logitech', 'Mouse Logitech', '123456');
INSERT INTO `accesorio_teclado` (`marca`, `descripcion`, `serial`) VALUES
    ('Logitech', 'teclado Logitech', '124426');
INSERT INTO `accesorio_diademas` (`marca`, `descripcion`, `serial`) VALUES
    ('Logitech', 'diademas Logitech', '124426');

-- Creamos el equipo a un lugar(esto ya es pre establesidos)
INSERT INTO equipos(id,nombre,descripcion,lugar_id) VALUES
(1,'CP-123','Equipo en perfecto estado',1);
-- Los asignamos los accesorio al equipo
INSERT INTO equipos_acc_lugar(equipos_id,accesorios_mouse_id,accesorios_teclado_id,accesorios_diademas_id) VALUES
(1,1,1,1);

-- Consulta de equipos
SELECT t2.nombre as 'equipo', t2.descripcion as 'descripcion_eq', t3.nombre as 'lugar' , t3.descripcion as 'desc_lugar' FROM equipos_acc_lugar AS T1
INNER JOIN equipos AS T2 ON T1.equipos_id = T2.id
INNER JOIN lugares AS T3 ON T2.lugar_id = T3.id;

-- Consulta de equipos por lugar
SELECT t2.nombre as 'equipo', t2.descripcion as 'descripcion_eq', t3.nombre as 'lugar' , t3.descripcion as 'desc_lugar' FROM equipos_acc_lugar AS T1
INNER JOIN equipos AS T2 ON T1.equipos_id = T2.id
INNER JOIN lugares AS T3 ON T2.lugar_id = T3.id
WHERE T3.nombre = 'apolo';

-- Consulta de equipos por marca de accesorios
SELECT t2.nombre as 'equipo', T4.marca as 'marca_diadema', T5.marca as 'marca_mouse', t6.marca as 'marca_teclado' ,t2.descripcion as 'descripcion_eq', t3.nombre as 'lugar' , t3.descripcion as 'desc_lugar' FROM equipos_acc_lugar AS T1
INNER JOIN equipos AS T2 ON T1.equipos_id = T2.id
INNER JOIN lugares AS T3 ON T2.lugar_id = T3.id
INNER JOIN accesorio_diademas AS T4 ON T1.accesorios_diademas_id = T4.id
INNER JOIN accesorio_mouse AS T5 ON T1.accesorios_mouse_id = T5.id
INNER JOIN accesorio_teclado AS T6 ON T1.accesorios_teclado_id = T6.id
WHERE T4.marca = 'Logitech' OR T5.marca = 'Logitech' OR T6.marca = 'Logitech';
