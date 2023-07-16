import equipos from '../models/equipos.js';

const getAllEquipos = async (req, res) => {

  try {

    const query = await equipos.getAllEquipos();


    res.json({ query });
    
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getAllEquiposMarcas = async (req, res) => {

  try {

    const query = await equipos.getAllEquiposMarcas(Object.values(req.params));


    res.json({ query });
    
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getAllEquipos , getAllEquiposMarcas } ;