import mysql from "mysql2/promise";

import dbConfig from "../config/dbconfig.js";

/* instacia de la conexion a la base de datos */
const getConnection = async () => {
  return await mysql.createConnection(dbConfig);
};

const getAllEquipos = async () => {
  const connection = await getConnection();

  try {
    const query_user = `SELECT t2.nombre as 'equipo', T4.marca as 'marca_diadema', T5.marca as 'marca_mouse', t6.marca as 'marca_teclado' ,t2.descripcion as 'descripcion_eq', t3.nombre as 'lugar' , t3.descripcion as 'desc_lugar' FROM equipos_acc_lugar AS T1
    INNER JOIN equipos AS T2 ON T1.equipos_id = T2.id
    INNER JOIN lugares AS T3 ON T2.lugar_id = T3.id
    INNER JOIN accesorio_diademas AS T4 ON T1.accesorios_diademas_id = T4.id
    INNER JOIN accesorio_mouse AS T5 ON T1.accesorios_mouse_id = T5.id
    INNER JOIN accesorio_teclado AS T6 ON T1.accesorios_teclado_id = T6.id;`;

    const [result] = await connection.execute(query_user);

    return result;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    connection.end();
  }
};

export default { getAllEquipos };
