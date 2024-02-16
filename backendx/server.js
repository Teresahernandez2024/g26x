const express = require ('express')
const dotenv =  require('dotenv').config()
const port = 5000

const app = express ()
app.use('/api/tareas', require('./routes/tareasRoutes'))

app.listen (port, () => console.log (`servidor iniciado en el puerto ${port}`))