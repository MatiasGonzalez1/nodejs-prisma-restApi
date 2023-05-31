/*REPRESENTACION DE LAS PROPIEDADES QUE SE GUARDAN EN LA BD */

import {Schema, Types, model, Model} from "mongoose";
import { Car } from "../interface/car.interface";

const ItemSchema = new Schema<Car>(
  {
    color:{
      type:String,
    },
    gas:{
      //es de tipo string pero los valores permitidos seran los enum
      type:String,
      enum:["gasoline", "electric"]
    },
    year:{
      type:Number,
    },
    description:{
      type:String,
    },
    price:{
      type:Number,
    },
  },
  {
  //cuando se guarde un dato en la bd se crea la fecha de creacion y la fecha de actualizacion
    timestamps: true,
    //no hace uso del dato por version v1, v2
    versionKey: false,
  }
);


const ItemModel = model('items', ItemSchema);
export default ItemModel;