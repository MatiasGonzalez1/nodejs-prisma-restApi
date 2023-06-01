import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item.service"
import ItemModel from "../models/item"

const getItem =  async ({params}: Request, res: Response)=>{
  try {
    const {id} = params
    const responseOne = await getCar(id);
    const data = responseOne ? responseOne : "NOT_FOUND";
    res.send(data);
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEM')
  }
}

const getItems = async (req: Request, res: Response)=>{
  try {
    const response = await getCars();
    res.send(response);
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEMS')    
  }
}

const updateItem = async ({params, body}: Request, res: Response)=>{
  try {
    const {id} = params;
    const responseItemUpdated = await updateCar(id, body)
    res.send(responseItemUpdated)
  } catch (error) {
    handleHttp(res, 'ERROR_UPDATE_ITEM')
  }
}

const postItem = async({body}: Request, res: Response)=>{
  try {
    const responseItem = await insertCar(body)
    res.send(responseItem)
  } catch (error) {
    handleHttp(res, 'ERROR_POST_ITEM', error)
  }
}

const deleteItem = async ({params}: Request, res: Response)=>{
  try {
    const {id} = params;
    const responseDeleteItem = await deleteCar(id);
    res.send(responseDeleteItem)
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_ITEM')
  }
}

export {getItem, getItems, postItem, deleteItem, updateItem};