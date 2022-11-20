const { Pool } = require("pg");
const credenciais = require('../config/configDB.js');

// Busca as temporadas associadas ao anime pelo ID do anime
exports.getEpisodiosTemporadaId = async function (id_temporada){
    try {
        const pool = new Pool(credenciais);
        const sql = ('select * from dbanime.episodios where id_temporada = $1');
        const values = [id_temporada];
        let result = await pool.query(sql, values);
        pool.end();
        return result.rows;
    }
    catch (error){
        return "Falha ao buscar os episódios pelo ID da temporada. Descrição do erro: " + error;
    }
}

// Busca o episódio pelo ID 
exports.getEpisodioId = async function (id_episodio){
    try {
        const pool = new Pool(credenciais);
        const sql = ('select * from dbanime.episodios where id_episodio = $1');
        const values = [id_episodio];
        let result = await pool.query(sql, values);
        pool.end();
        return result.rows;
    }
    catch (error){
        return "Falha ao buscar o episódio pelo ID. Descrição do erro: " + error;
    }
}