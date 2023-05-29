import express from "express";
import productRoute from "./routes/products.routes.js"
import categoryRoute from "./routes/category.routes.js"

//usa express para crear un servidor
const app = express();

//usa el metodo .json para enviar y recibir datos
app.use(express.json())

app.use('/api', productRoute)

app.use('/api', categoryRoute
)

//estará escuchando el puerto 3000
app.listen(3000)
console.log('Server on port', 3000)