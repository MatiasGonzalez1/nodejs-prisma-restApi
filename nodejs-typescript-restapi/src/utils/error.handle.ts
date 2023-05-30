//función para manejar mensajes de errores

import { Response } from "express"

const handleHttp = (res:Response, error:string)=>{
  res.status(500)
  res.send({error})
}

export {handleHttp};