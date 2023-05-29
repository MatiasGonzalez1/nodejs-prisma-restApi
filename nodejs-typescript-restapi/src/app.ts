import "dotenv/config";
import express from "express";
import cors from "cors";

//lista blanca e implementacion de cors para origenes especificos
{/*const whiteList = ["http://localhost:3000/"]
const app = express({origin: whiteList});*/}

const PORT = process.env.PORT || 3000;

const app = express();

//de esta forma puede ser consumida la app desde cualquier origen
app.use(cors());

app.listen(PORT, ()=> console.log(`Servidor listo en el puerto ${PORT}`));