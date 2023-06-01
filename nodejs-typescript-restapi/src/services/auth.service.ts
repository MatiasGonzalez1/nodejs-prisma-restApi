import { Auth } from "../interface/auth.interface";
import { User } from "../interface/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handle";


const registerNewUser = async ({email, password,name}: User)=>{
  
  //busca el usuario con el dato que viene por email
  
  const checkIs = await UserModel.findOne({email});
  if(checkIs) return "ALREADY_USER";
  const passHash = await encrypt(password)

  const registerNewUser = await UserModel.create({email, password: passHash, name})

  return registerNewUser;
};

const loginUser = async ({email, password}:Auth)=>{

  //revisa en la bd si existe el email ingresado
  const checkIs = await UserModel.findOne({email});
  if(!checkIs) return "INVALID_DATA";

  const passwordHash = checkIs.password;

  //verifica si la contraseña ingresada es la misma que la qu esta en la bd
  const isCorrect = await verified(password, passwordHash);

  if(!isCorrect) return "PASSWORD_INCORRECT";
  return checkIs;
}
export {loginUser, registerNewUser}