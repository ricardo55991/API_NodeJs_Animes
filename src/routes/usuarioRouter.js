const router = require('express').Router();
const usuarioService = require('../Services/usuarioService');

router.get('/login', async function (req, res){ 
    const result = await usuarioService.getUsuario(req.body.login, req.body.senha); 
    res.json(result);
});

router.post('/cadastro', async function (req, res){ 
    const result = await usuarioService.postUsuario(req.body.login, req.body.email, req.body.senha); 
    res.json(result);
});

module.exports = router;