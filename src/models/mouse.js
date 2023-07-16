import mysql from "mysql2/promise";

import dbConfig from "../config/dbconfig.js";

/* instacia de la conexion a la base de datos */
const getConnection = async () => {
  return await mysql.createConnection(dbConfig);
};

const getAllMouse = async () => {
  const connection = await getConnection();

  try {
    const [query] = await connection.query(
      "SELECT id , marca , descripcion, serial FROM accesorio_mouse"
    );

    return query;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    connection.end();
  }
};

/**
 *
 * data = {
 *
 *  marca : "Acer",
 *  description : "Buen mouse",
 *  serial : "145ds"
 *
 * }
 *
 */

const updateMouse = async (data, id) => {
  const connection = await getConnection();
  try {
    let query = `UPDATE accesorio_mouse SET `;
    const values = [];

    // Construir la consulta dinámicamente patch
    Object.entries(data).forEach(([key, value], index) => {
      query += `${key} = ?`;
      values.push(value);

      if (index < Object.entries(data).length - 1) {
        query += ", ";
      }
    });

    query += ` WHERE id = ?;`;
    values.push(id[0]);

    console.log(values);

    const [result] = await connection.execute(query, values);

    if (result.affectedRows > 0) {
      return data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    connection.end();
  }
};


// Crear diademas

const createMouse = async (data) => {
  const connection = await getConnection();

  try {
    const query = `INSERT INTO accesorio_mouse (marca, descripcion, serial) VALUES (?, ?, ?)`;
    const values = [data.marca, data.descripcion, data.serial];

    await connection.execute(query, values);

    return data; 
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    connection.end();
  }
};

// Delate diademas

const deleteMouse = async (id) => {
  const connection = await getConnection();

  try {
    const query = `DELETE FROM accesorio_mouse WHERE id = ?`;

    const [result] = await connection.execute(query, id);

    return result; // Retorna la cantidad de filas afectadas por la eliminación

  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    connection.end();
  }
};


export default { getAllMouse, updateMouse, createMouse, deleteMouse };
