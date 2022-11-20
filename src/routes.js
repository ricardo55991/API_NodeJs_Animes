const { json } = require('express');
const router = require('express').Router();
const temporadaRouter = require('./routes/temporadaRouter');
const animeRouter = require('./routes/animeRouter');
const episodioRouter = require('./routes/episodioRouter');
const usuarioRouter = require('./routes/usuarioRouter');


router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "Servidor ON"
    })
})

// Rotas 
router.use('/anime', animeRouter);
router.use('/temporada', temporadaRouter);
router.use('/episodio', episodioRouter);
router.use('/usuario', usuarioRouter);

module.exports = router;


// router.get('/animes', getAnimes);
// router.get('/animeID', getAnimeID);
// router.get('/animeName', getAnimeName);
// router.post('/anime', postAnime);
// router.put('/anime', putAnime);
// router.delete('/anime', deleteAnime);