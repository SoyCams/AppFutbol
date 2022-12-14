import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const db =  mongoose.connect(process.env.KEY_MONGO).then(()=> {
    console.log("La conexion fue realizada con exito a la bd:")
}).catch((error) => console.error("Problemas al conectar a la Base de datos de Mongodb",error));



export default db;