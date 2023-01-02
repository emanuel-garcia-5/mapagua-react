const {response} = require('express')


const usuariosGet = (req, res = response) => {

    const query = req.query;
    res.json({
        ok: true,
        msg: "get API Controlador",
        query
    })
}

const usuariosPut = (req, res) => {

    const id = req.params.id;
    res.json({
        ok: true,
        msg: "put API - controlador",
        id
    })
}

const usuariosPost = (req, res) => {

    const {nombre} = req.body;
    res.json({
        ok: true,
        msg: "post API - controlador",
        nombre

        
    })
}

const usuariosDelete = (req, res) => {
    res.json({
        ok: true,
        msg: "delete API - controlador"
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}