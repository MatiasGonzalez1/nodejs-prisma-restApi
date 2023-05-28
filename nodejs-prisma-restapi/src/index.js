import express from "express";
import { category, products } from "./routes";
//usa express para crear un servidor
const app = express();

//usa el metodo .json para enviar y recibir datos
app.use(express.json())

app.use('/api', products)

app.use('/api', category)

//estará escuchando el puerto 3000
app.listen(3000)
console.log('Server on port', 3000)