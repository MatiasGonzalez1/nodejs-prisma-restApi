/*REPRESENTACION DE LAS PROPIEDADES QUE SE GUARDAN EN LA BD */

import {Schema, Types, model, Model} from "mongoose";
import { User } from "../interface/user.interface";
 
const UserSchema = new Schema<User>(
{
  name:{
    type:String,
    required: true
  },
  password:{
    type:String,
    required: true
  },
  email:{
    type:String,
    required: true,
    unique:true
  },
  description:{
    type:String,
    default:"Soy la descripcion del usuario"
  }
},
{
  versionKey:false,
  timestamps:true,
}
 );


const UserModel = model('users', UserSchema);
export default UserModel;