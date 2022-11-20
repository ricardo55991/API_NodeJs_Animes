const router = require('express').Router();
const usuarioService = require('../Services/usuarioService');

router.get('/login', async function (req, res){ 
    const result = await usuarioService.getUsuario(req.body.loginOuEmail, req.body.senha); 
    res.json(result);
});

module.exports = router;