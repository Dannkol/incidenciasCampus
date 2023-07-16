import mysql from "mysql2/promise";

import dbConfig from "../config/dbconfig.js";

/* instacia de la conexion a la base de datos */
const getConnection = async () => {
  return await mysql.createConnection(dbConfig);
};

const getUser = async (data) => {
  const connection = await getConnection();

  try {
    const query_user = `SELECT id, email, nombre , password FROM usuarios WHERE email = ? AND password = ?;`;

    const [result] = await connection.execute(query_user, data);

    if (!result.length) {
      return {
        id: "",
        email: "",
        nombre: "",
        password: "",
      };
    } else {
      return result[0];
    }
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    connection.end();
  }
};

/**
 *
 * {
 *
 *    "nombre" : "daniel",
 *    "apellido" : "Manosalva",
 *    "password" : "12345",
 *    "doc_usuario" : "12348589",
 *    "tipo_documento" : 1,
 *    "telefono" : "12345",
 *    "movile" : "+57212345",
 *    "email" : "manosalva@gmail.com",
 *    "email_coords" : "manosalva@campuslands.com",
 *    "tel_fijo_coords" : "+15535435",
 *    "tel_movile_coords" : "+575898385"
 *
 * }
 *
 */

const createUsuario = async (data) => {
  const connection = await getConnection();

  const query_info_coords = `
  INSERT INTO infoempresarial (emailCoor, telFijoCoor, telMovCoor)
  VALUES (?, ?, ?)
`;
  const values_info_coords = [
    data.email_coords,
    data.tel_fijo_coords,
    data.tel_movile_coords,
  ];

  const [result_info_coords] = await connection.execute(
    query_info_coords,
    values_info_coords
  );


  try {
    const query_user = `
      INSERT INTO usuarios (infoEmpresarial_id, nombre, apellidos, password, doc_usuario, tipoDocumento_id, telefono, movile, email)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values_user = [
      result_info_coords.insertId,
      data.nombre,
      data.apellido,
      data.password,
      data.doc_usuario,
      data.tipo_documento,
      data.telefono,
      data.movile,
      data.email,
    ];

    await connection.execute(query_user, values_user);

    return {
      message : "User successfully",
      data : data
    };
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    connection.end();
  }
};

export default { getUser , createUsuario};
