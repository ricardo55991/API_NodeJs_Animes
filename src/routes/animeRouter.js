const router = require('express').Router();
const animeService = require('../Services/animeService');

router.get('/hora', async function (req, res){ 
    const result = await animeService.GetHora(); 
    res.json(result);
});

router.get('/animes', async function (req, res){
    const result = await animeService.getAnimes();
    res.json(result);
});

router.get('/animeId', async function (req, res){
    const result = await animeService.getAnimeId();
    //const result = await animeService.getAnimeId(req.body.animeId); // Exemplo de dados que deverão ser recebidos
    res.json(result);
});

router.get('/animeNome', async function (req, res){
    const result = await animeService.getAnimeNome();
    res.json(result);
});

module.exports = router;