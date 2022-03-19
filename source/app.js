const http = require("http");
const express = require("express");
const { append } = require("express/lib/response");
const puerto = 3000;
const app = express();
const path= require("path")
const misRutas= require('./router/index');

//configuracion
//Configurar el motor de vistas
    app.set('views engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));
    app.engine('html', require('ejs').renderFile);

//Recursos Publicos
app.use(express.static(path.join(__dirname, 'public')));

    //rutas
app.use(misRutas);

app.listen(puerto, ()=>{
    console.log("iniciamos el puerto");

})
