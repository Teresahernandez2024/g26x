const express = require ('express')
const dotenv =  require('dotenv').config()
const colors=require('colors')
const connectDB  = require ('./config/db')
const{errorHandler} = require('./middleware/errorMiddleware')

const port = 5000

connectDB()


const app = express ()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/tareas', require('./routes/tareasRoutes'))

app.use(errorHandler)
    
app.listen (port, () => console.log (`servidor iniciado en el puerto ${port}`))