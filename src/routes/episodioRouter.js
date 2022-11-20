const router = require('express').Router();
const episodioService = require('../Services/episodioService');

router.get('/episodioId', async function (req, res){
    const result = await episodioService.getEpisodioId();
    res.json(result);
});

router.get('/episodiosTemporadaId', async function (req, res){
    const result = await episodioService.getEpisodiosTemporadaId();
    res.json(result);
});

module.exports = router;