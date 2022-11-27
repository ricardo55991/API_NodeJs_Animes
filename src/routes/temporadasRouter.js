const router = require('express').Router();
const temporadaService = require('../Services/temporadasService');

router.get('/temporadaId', async function (req, res){
    const result = await temporadaService.getTemporadasAnimeId();
    res.json(result);
});

module.exports = router;