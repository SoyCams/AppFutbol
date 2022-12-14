import {usuario} from '../Models/usuario.js'

//aqui se guarda el usuario en la base de datos
export const regusuario = (req,res) => {
const user = usuario(req.body)
user
.save()
.then((data) => res.json(data))
.catch((error) => res.json({message: error}))
}

export default regusuario;