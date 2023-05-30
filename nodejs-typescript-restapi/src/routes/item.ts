import {Request, Response, Router } from "express";

const router = Router();

router.get("/items", (req: Request, res: Response)=>{
  res.send({data: "ACA VAN LOS MODELOS"})
})

export {router};