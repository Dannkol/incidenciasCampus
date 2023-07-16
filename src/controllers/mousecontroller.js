import Mouse from "../models/mouse.js";

const getAllMouse = async (req, res) => {
    try {
        const getAllMouse = await Mouse.getAllMouse();
        res.status(200).json({
            messeger : "All Mouse",
            data : getAllMouse
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }finally{
        res.end();
    }
}

const updateMouse = async (req, res) => {
    try {
        
        const updateMouse = await Mouse.updateMouse(req.body,Object.values(req.params))

        res.status(200).json({
            messeger : "Update Mouse",
            data : updateMouse
        });

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }finally{
        res.end();
    }
}

const createMouse = async (req, res) => {
    try {
        const createMouse = await Mouse.createMouse(req.body);
        res.status(200).json({
            messeger : "Create Mouse",
            data : createMouse
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }finally{
        res.end();
    }
}

const deleteMouse = async (req, res) => {
    try {
        const deleteMouse = await Mouse.deleteMouse(Object.values(req.params.id));
        res.status(200).json({
            messeger : "Delete Mouse",
            data : deleteMouse
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

export { getAllMouse , updateMouse, createMouse , deleteMouse }