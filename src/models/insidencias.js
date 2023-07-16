import mysql from "mysql2/promise";

import dbConfig from "../config/dbconfig.js";

/* instacia de la conexion a la base de datos */
const getConnection = async () => {
  return await mysql.createConnection(dbConfig);
};

const CreateInsidencia = async (data, id_user) => {
  const connection = await getConnection();

  try {
    const query_user = `
    INSERT INTO insidencias (nombre, descripcion, equipo_id, lugar_id, fecha, nivel_id, categoria_id)
    VALUES (?, ?, ?, ?, ?, ?, ?);
    `;

    const [result] = await connection.execute(query_user, data);

    const id_insidencia = result.insertId;

    const query_historial_insidencia_usuarios = `
    INSERT INTO historial_insidencia_usuarios (usuario_id, insidencia_id)
    VALUES (?,?);
    `;

    await connection.execute(query_historial_insidencia_usuarios, [id_user, id_insidencia]);

    const query_select_historial_insidencia_usuarios= `SELECT t3.nombre as 'trainer', t2.nombre, t2.descripcion , t7.nombre as 'equipo' , t4.nombre as 'categoria' , t5.nombre as 'nivel', t6.nombre as 'lugar' FROM historial_insidencia_usuarios as t1
    INNER JOIN insidencias as t2 ON t1.insidencia_id = t2.id
    INNER JOIN usuarios as t3 on t1.usuario_id = t3.id
    INNER JOIN insidencia_categoria AS T4 ON T4.id = T2.categoria_id
    INNER JOIN insidencia_nivel AS T5 ON T5.id = T2.nivel_id
    INNER JOIN lugares AS T6 ON T6.id = T2.lugar_id
    INNER JOIN equipos AS T7 ON T7.id = T2.equipo_id
    WHERE T2.id = ?`;

    const [query_select_historial_insidencia_usuarios_result] = await connection.execute(query_select_historial_insidencia_usuarios, [id_insidencia]);
    return query_select_historial_insidencia_usuarios_result;

  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    connection.end();
  }
};

export default { CreateInsidencia };