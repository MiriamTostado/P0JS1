const express = require("express");
const router = express.Router();

router.get('/', (req,res)=>{
    res.send("Servidor trabajando");
})
router.get('/index', (req,res)=>{
        res.render('index.html', {titulo:'Index'})
    });
router.get('/acercade',(req, res)=>{
        res.render('acercade.html',{titulo:'titulo'})
    });

router.get('/contactos',(req, res)=>{
        res.render('contactos.html',{titulo:'Contactos'})
    });
router.get('/about',(req, res)=>{
        res.render('about.html',{titulo:'About'})
    });
router.get('/productos',(req, res)=>{
        res.render('Productos.html',{titulo:'Productos'})
    });

router.get('*',(req,res)=>{
        res.send("No es una ruta valida")
    });
    module.exports=router;
