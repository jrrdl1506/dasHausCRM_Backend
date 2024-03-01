const express = require('express');
const conectarDB = require('./config/db');
const app = express();

conectarDB();
app.use(express.json());


app.use('/dasHaus',require('./routes/rutas'));

app.listen(4000,()=>{
    console.log('Servidor corriendo perfectamente');
})