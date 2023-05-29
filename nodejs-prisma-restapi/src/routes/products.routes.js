import { Router } from "express";
import {prisma} from "../db.js";

const router = Router();


router.get('/products', async (req, res)=>{
  const products = await prisma.product.findMany()
  res.json(products)
 })

 router.get('/products/:id', async (req, res)=>{
  const oneProduct = await prisma.product.findFirst({
    where:{
      id: parseInt(req.params.id)
    },
  });

  if(!oneProduct) return res.status(404).json({error: "Product not found"});
  return res.json(oneProduct);
 })

 router.post('/products', async (req, res)=>{
  const newProduct = await prisma.product.create({
    data:req.body,
  });
  res.json(newProduct)
 });

 router.delete('/products/:id', async (req, res)=>{
  const deleteOneProduct = await prisma.product.delete({
    where:{
      id: parseInt(req.params.id)
    },
  });

  if(!deleteOneProduct) return res.status(404).json({error: "Product not found"});
  return res.json(deleteOneProduct);
 })

export default router;