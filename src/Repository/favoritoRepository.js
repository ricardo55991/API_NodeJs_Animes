const { Pool } = require("pg");
const credenciais = require('../config/configDB.js');

// Busca as temporadas associadas ao anime pelo ID do anime
exports.getFavoritos = async function (id_usuario){
    try {
        const pool = new Pool(credenciais);
        const sql = `select ani.*, 'S' ind_favorito
                    from dbanime.animes ani 
                    join dbanime.favoritos fav on fav.id_anime = ani.id_anime and fav.id_usuario = $1
                    order by fav.data_criacao asc`;
        const values = [id_usuario];
        let result = await pool.query(sql, values);
        pool.end();
        return result.rows;
    }
    catch (error){
        return "Falha ao buscar a lista de favoritos. Descrição do erro: " + error;
    }
}