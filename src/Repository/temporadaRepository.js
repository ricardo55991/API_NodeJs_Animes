const { Pool } = require("pg");
const credenciais = require('../configDB.js');

// Busca as temporadas associadas ao anime pelo ID do anime
exports.getTemporadasAnimeId = async function (id_anime){
    try {
        const pool = new Pool(credenciais);
        const sql = ('select * from dbanime.temporadas where id_anime = $1');
        const values = [id_anime];
        let result = await pool.query(sql, values);
        pool.end();
        return result.rows;
    }
    catch (error){
        return "Falha ao buscar as temporadas pelo ID do anime. Descrição do erro: " + error;
    }
}