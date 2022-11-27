const router = require('express').Router();
const usuarioService = require('../Services/usuariosService');

router.get('/login', async function (req, res){ 
    const result = await usuarioService.getUsuario(req.query.usuario, req.query.senha); 
    res.json(result);
});

router.post('/cadastro', async function (req, res){ 
    const result = await usuarioService.postUsuario(req.body.usuario, req.body.email, req.body.senha); 
    res.json(result);
});

module.exports = router;