import Teclado from "../models/teclado.js";

const getAllTeclado = async (req, res) => {
    try {
        const getAllTeclado = await Teclado.getAllTeclado();
        res.status(200).json({
            messeger : "All Teclado",
            data : getAllTeclado
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }finally{
        res.end();
    }
}

const updateTeclado = async (req, res) => {
    try {
        
        const updateTeclado = await Teclado.updateTeclado(req.body,Object.values(req.params))

        res.status(200).json({
            messeger : "Update Teclado",
            data : updateTeclado
        });

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }finally{
        res.end();
    }
}

const createTeclado = async (req, res) => {
    try {
        const createTeclado = await Teclado.createTeclado(req.body);
        res.status(200).json({
            messeger : "Create Teclado",
            data : createTeclado
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }finally{
        res.end();
    }
}

const deleteTeclado = async (req, res) => {
    try {
        const deleteTeclado = await Teclado.deleteTeclado(Object.values(req.params.id));
        res.status(200).json({
            messeger : "Delete Teclado",
            data : deleteTeclado
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            messeger : `Error deleting ${error.sqlState}`
        });
    }finally{
        res.end();
    }
}

export { getAllTeclado , updateTeclado, createTeclado , deleteTeclado }