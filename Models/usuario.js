import mongoose, {Mongoose} from 'mongoose'
import {db} from '../mongodb.js'

const userSchema = new mongoose.Schema (
{
    nomuser:{
        type: String,
        require:true
      },
    correo: {
        type: String,
        require: true,
        unique:true
    },
    password: {
         type: String,
         require: true
    }
},
{
    timestamps: true,
    versionkey: false,
}
);

export const usuario = mongoose.model('users',userSchema);
export default usuario;
