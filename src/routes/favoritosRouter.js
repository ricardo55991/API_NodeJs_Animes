const router = require('express').Router();
const favoritoService = require('../Services/favoritosService');

router.get('/favoritos', async function (req, res){
    const result = await favoritoService.getFavoritos();
    res.json(result);
});


module.exports = router;