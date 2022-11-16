const { json } = require('express');

const router = require('express').Router();
const animeService = require('./Services/animeService');
const temporadaService = require('./Services/temporadaService');
const episodioService = require('./Services/episodioService');

router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "Servidor ON"
    })
})


// ------------------------------------------------------ Animes -------------------------------------------------------
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
    res.json(result);
});
router.get('/animeNome', async function (req, res){
    const result = await animeService.getAnimeNome();
    res.json(result);
});


// ---------------------------------------------------- Temporadas -----------------------------------------------------
router.get('/temporadaId', async function (req, res){
    const result = await temporadaService.getTemporadasAnimeId();
    res.json(result);
});

// ----------------------------------------------------- Episódios -----------------------------------------------------
router.get('/episodioId', async function (req, res){
    const result = await episodioService.getEpisodioId();
    res.json(result);
});
router.get('/episodiosTemporadaId', async function (req, res){
    const result = await episodioService.getEpisodiosTemporadaId();
    res.json(result);
});


module.exports = router;


// router.get('/animes', getAnimes);
// router.get('/animeID', getAnimeID);
// router.get('/animeName', getAnimeName);
// router.post('/anime', postAnime);
// router.put('/anime', putAnime);
// router.delete('/anime', deleteAnime);