import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

import router from './routes.js'
app.use(router);

app.listen(PORT, () => console.log("Servidor ON.")); // Porta que o express está trabalhando 