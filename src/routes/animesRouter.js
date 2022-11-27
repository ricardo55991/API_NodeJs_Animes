const router = require('express').Router();
const animeService = require('../Services/animesService');

router.get('/hora', async function (req, res){ 
    const result = await animeService.GetHora(); 
    res.json(result);
});

router.get('/animes', async function (req, res){
    const result = await animeService.getAnimes(req.body.id_usuario);
    res.json(result);
});

router.get('/animeId', async function (req, res){
    const result = await animeService.getAnimeId();
    res.json(result);
});

router.get('/animeNome', async function (req, res){
    const result = await animeService.getAnimeNome();
    res.json(result);
});

module.exports = router;