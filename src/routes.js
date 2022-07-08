import { Router } from "express";
import { getAnimes } from './Controller/Animes.js';

const router = Router();

router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "Servidor ON"
    })
})

router.get('/animes', getAnimes);
// router.get('/pessoa', selectPessoa);
// router.post('/pessoa', insertPessoa);
// router.put('/pessoa', updatePessoa);
// router.delete('/pessoa', deletePessoa);

export default router;