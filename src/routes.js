import { Router } from "express";
import { getAnimes, getAnimeID, getAnimeName, postAnime, putAnime, deleteAnime } from './Controller/Animes.js';

const router = Router();

router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "Servidor ON"
    })
})

// Rotas ANIMES 
router.get('/animes', getAnimes);
router.get('/animeID', getAnimeID);
router.get('/animeName', getAnimeName);
router.post('/anime', postAnime);
router.put('/anime', putAnime);
router.delete('/anime', deleteAnime);

export default router;