const { json } = require('express');

const router = require('express').Router();
const animeController = require('./Controller/Animes.js').getAnimesX;

router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "Servidor ON"
    })
})

// Rotas ANIMES 
// router.get('/animesxx', async function (req, res){
//     const response = await animeController();
//     res.json(response);
// });
router.get('/animesxx', async function (req, res){
    try {
        const response = await animeController();
        res.json(response);
    }
    catch (error) {
        res.json({"Mensagem de erro": "Falha ao acessar a rota animesxx", "Descrição do erro:": error})
    }
});

// router.get('/animes', getAnimes);
// router.get('/animeID', getAnimeID);
// router.get('/animeName', getAnimeName);
// router.post('/anime', postAnime);
// router.put('/anime', putAnime);
// router.delete('/anime', deleteAnime);

module.exports = router;