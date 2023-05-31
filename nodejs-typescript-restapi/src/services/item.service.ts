import { Car } from "../interface/car.interface";
import ItemModel from "../models/item.model";

//CREATE ITEM
  const insertCar = async (item:Car)=>{
    const responseInsert = await ItemModel.create(item);
    return responseInsert;
  }

  //GET ITEMS
  const getCars = async ()=>{
    const responseItem = await ItemModel.find({})
    return responseItem
  }

  //GET ONE ITEM
  const getCar = async (id:String)=>{
    const responseItem = await ItemModel.findOne({_id:id})
    return responseItem
  }

  //UPDATE ITEM
  const updateCar = async (id:String, data: Car)=>{

    const responseItem = await ItemModel.findOneAndUpdate(
      {_id:id}, 
      data,
      {
       //responde el objeto ya actualizado
        new:true
      }
      );
    return responseItem
  }

  //DELETE ITEM
  const deleteCar = async (id:String)=>{
    const responseItem = await ItemModel.findOneAndDelete({_id:id})
    return responseItem;
  }
export {insertCar, getCars, getCar, deleteCar, updateCar};
