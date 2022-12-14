import  express  from 'express'
import router from './Routes/routes.js'
import cors from 'cors'

const app = express()
app.use(cors()) 
app.use(express.json())
app.use('/usuarios',router)

  
const puerto = 8000;
app.listen(puerto, () => {
    console.log( `El servidor esta corriendo en http://localhost:${puerto}`)
})  