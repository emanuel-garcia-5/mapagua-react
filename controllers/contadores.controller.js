const {response} = require('express');


const Contador = require('../models/contadores');

const getContador = async (req, res = response)=>{

    const contadores = await  Contador.find();

    res.json({
        contadores
    })
}

module.exports = {
    getContador
}