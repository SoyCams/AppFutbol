import  express from "express";
import {regusuario} from '../controllers/usercontroller.js'
export const router = express.Router();
import {db} from '../mongodb.js'

//rutas para usuarios 
router.post('/reguser',regusuario);


//ejemplos de clase anterior
router.get('/',function (req,res){
    res.send('hola desde la raiz')
})
router.get('/user', (req,res) => {
    res.send('obteniendo informacion del usuario')
})
router.post('/login', (req,res) => {
    res.send('loguiando desde login')
})
router.put('/update',(req,res) => {
    res.send('actualizando los usuarios')
})
router.delete('/delete', (req, res) => {
  res.send('eliminando un usuario')
})

export default regusuario;

