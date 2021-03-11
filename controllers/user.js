const { request, response } = require('express');

const usersGet = (req = request, res = response) => {

    const {q = 'Sin mensaje', nombre, apikey} = req.query;

    res.json({
        msg: 'Get API desde Controlador',
        q,
        nombre,
        apikey
    })
}

const usersPost = (req = request, res = response) => {
    const {nombre, edad} = req.body;
    res.status(201).json({
        msg: 'Post API desde Controlador',
        nombre,
        edad
    })
};

const usersPut = (req = request, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'Put API desde Controlador',
        id
    })
};

const usersDelete = (req = request, res = response) => {
    res.json({
        msg: 'Delete API desde Controlador'
    })
};



module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
}