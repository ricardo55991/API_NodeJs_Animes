const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const router = require('./routes.js')
app.use(router);

app.listen(PORT, () => console.log("Servidor ON.")); // Porta que o express está trabalhando 