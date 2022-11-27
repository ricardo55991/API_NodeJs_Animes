const { json } = require('express');
const router = require('express').Router();
const temporadasRouter = require('./routes/temporadasRouter');
const animesRouter = require('./routes/animesRouter');
const episodiosRouter = require('./routes/episodiosRouter');
const usuariosRouter = require('./routes/usuariosRouter');


router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "Servidor ON"
    })
})

// Rotas 
router.use('/animes', animesRouter);
router.use('/temporadas', temporadasRouter);
router.use('/episodios', episodiosRouter);
router.use('/usuarios', usuariosRouter);

module.exports = router;


// router.get('/animes', getAnimes);
// router.get('/animeID', getAnimeID);
// router.get('/animeName', getAnimeName);
// router.post('/anime', postAnime);
// router.put('/anime', putAnime);
// router.delete('/anime', deleteAnime);