import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes/item";
import db from "./config/mongo";
//lista blanca e implementacion de cors para origenes especificos
{/*const whiteList = ["http://localhost:3000/"]
const app = express({origin: whiteList});*/}

const PORT = process.env.PORT || 3000;

const app = express();

//de esta forma puede ser consumida la app desde cualquier origen
app.use(cors());

app.use(router);

db().then(()=>{
  console.log("Conexion Ready")
})

app.listen(PORT, ()=> console.log(`Servidor listo en el puerto ${PORT}`));