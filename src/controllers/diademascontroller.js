import diademas from "../models/diademas.js";

const getAllDiademas = async (req, res) => {
    try {
        const getAllDiademas = await diademas.getAllDiademas();
        res.status(200).json({
            messeger : "All diademas",
            data : getAllDiademas
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }finally{
        res.end();
    }
}

const updateDiademas = async (req, res) => {
    try {
        
        const updateDiademas = await diademas.updateDiademas(req.body,Object.values(req.params))

        res.status(200).json({
            messeger : "Update diademas",
            data : updateDiademas
        });

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }finally{
        res.end();
    }
}

const createDiadema = async (req, res) => {
    try {
        const createDiadema = await diademas.createDiadema(req.body);
        res.status(200).json({
            messeger : "Create diademas",
            data : createDiadema
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }finally{
        res.end();
    }
}

const deleteDiadema = async (req, res) => {
    try {
        const deleteDiadema = await diademas.deleteDiadema(Object.values(req.params.id));
        res.status(200).json({
            messeger : "Delete diademas",
            data : deleteDiadema
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

export { getAllDiademas , updateDiademas, createDiadema , deleteDiadema }