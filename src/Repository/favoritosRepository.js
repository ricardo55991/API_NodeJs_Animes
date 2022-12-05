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
},

exports.postFavorito = async function (id_usuario, id_anime){
    try {
        const pool = new Pool(credenciais);
        const sql = `insert into dbanime.favoritos (id_usuario, id_anime) values ($1, $2)`;
        const values = [id_usuario, id_anime];
        let result = await pool.query(sql, values);
        pool.end();
        return result.rows;
    }
    catch (error){
        return "Falha ao inserir o favorito. Descrição do erro: " + error;
    }
},

exports.deleteFavorito = async function (id_usuario, id_anime){
    try {
        const pool = new Pool(credenciais);
        const sql = `delete from dbanime.favoritos where id_usuario = $1 and id_anime = $2`;
        const values = [id_usuario, id_anime];
        let result = await pool.query(sql, values);
        pool.end();
        return result.rows;
    }
    catch (error){
        return "Falha ao deletar o favorito. Descrição do erro: " + error;
    }
}