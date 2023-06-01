import { hash, compare } from "bcryptjs"

//encripta la contraseña hasheandola 8 veces
const encrypt = async(pass:string)=>{
  const passwordHash = await hash(pass, 8);
  return passwordHash;
}

//verifica si la contraseña ingresada coincide con el hash guardado en la bd
const verified = async (pass:string, passHash:string)=>{
  const isCorrect = await compare(pass, passHash);
  return isCorrect;

}

export {encrypt, verified}