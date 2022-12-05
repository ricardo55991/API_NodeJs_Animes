const router = require('express').Router();
const favoritoService = require('../Services/favoritosService');

router.get('/favoritos', async function (req, res){
    const result = await favoritoService.getFavoritos(req.query.id_usuario);
    res.json(result);
});

router.post('/favorito', async function (req, res){
    const result = await favoritoService.postFavorito(req.body.id_usuario, req.body.id_anime);
    res.json(result);
});

router.delete('/favorito', async function (req, res){
    const result = await favoritoService.deleteFavorito(req.body.id_usuario, req.body.id_anime);
    res.json(result);
});


module.exports = router;