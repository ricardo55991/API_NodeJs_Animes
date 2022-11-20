const router = require('express').Router();
const temporadaService = require('../Services/temporadaService');

router.get('/temporadaId', async function (req, res){
    const result = await temporadaService.getTemporadasAnimeId();
    res.json(result);
});

module.exports = router;