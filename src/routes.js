const { json } = require('express');

const router = require('express').Router();
const { GetHora } = require('./Services/animesService');

router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "Servidor ON"
    })
})


// Animes
router.get('/hora', async function (req, res){ 
    const response = await GetHora(); 
    res.json(response);
});

// router.get('/animes', getAnimes);
// router.get('/animeID', getAnimeID);
// router.get('/animeName', getAnimeName);
// router.post('/anime', postAnime);
// router.put('/anime', putAnime);
// router.delete('/anime', deleteAnime);

module.exports = router;