import dotenv  from "dotenv"
import express  from "express";
//Modulos propios
import configureApp from "./src/config/express.js";
import routes_auth from './src/routes/routes_auth.js';
import routes_equipos from './src/routes/routes_equipos.js';

dotenv.config()

const app = express();

// Configurar la aplicación Express
configureApp(app);


// Definir las rutas
app.use('/api',routes_auth);
app.use('/api/equipos',routes_equipos);



// Variables de entorno
const PORT = process.env.PORT || 8080;



//Get all employees from the database


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })