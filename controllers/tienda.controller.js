const {response} = require('express');


const Articulo = require('../models/articulos');

const getTienda = async (req, res = response)=>{

    const query = {estado: true};

    const [total, articulos] = await Promise.all([
        Articulo.countDocuments(query),
        Articulo.find(query)
    ]);

    res.json({
        articulos,
        total
    })
}
const postTienda = async  (req, res = response)=>{


    console.log('alog')
    const {nombre, precio} = req.body;

    const articulo = new Articulo({nombre, precio});
    
    await articulo.save();

    res.json({
        msg: 'hola desde el post',
        articulo
    })

}

module.exports = {
    getTienda,
    postTienda
}