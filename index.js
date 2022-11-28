import  express  from "express"

const app = express()

app.get('/', (req, res) => {
  res.send('🚀Bienvenido a la aplicacion wed🚀')
})

app.listen(8000,  () => {
    console.log("El servidor esta corriendo en http://localhost:8000")
})
    
    