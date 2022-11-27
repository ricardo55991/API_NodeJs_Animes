const { Pool } = require("pg");
const credenciais = require('../config/configDB.js');

exports.GetHora = async function (){
    try{
        const pool = new Pool(credenciais);
        const sql = await pool.query('select now()')
        pool.end();
        return sql.rows;
    }
    catch (error){
        return "Falha ao buscar hora. Descrição do erro: " + error;
    }
}

// Busca todos os animes
exports.getAnimes = async function (id_usuario){
    try{
        const pool = new Pool(credenciais);
        let result;

        // É validado se o usuário está logado, pois se estiver precisa exibir os animes que foi favoritado.
        if(id_usuario == null){
            result = await pool.query("select ani.*, 'N' ind_favorito  from dbanime.animes ani order by ani.data_criacao asc");
        }else{
            const sql = `select ani.*, (case when fav.id_usuario = $1 then 'S' else 'N' end) ind_favorito 
                        from dbanime.animes ani 
                        left join dbanime.favoritos fav on fav.id_anime = ani.id_anime and fav.id_usuario = $1
                        order by ani.data_criacao asc`;
            const values = [id_usuario];
            result = await pool.query(sql, values);
        }
        pool.end();
        return result.rows;
    }
    catch (error){
        return "Falha ao buscar todos os animes. Descrição do erro: " + error;
    }
}

// Busca o anime pelo ID
exports.getAnimeId = async function (id_anime){
    try {
        const pool = new Pool(credenciais);
        const sql = ('select * from dbanime.animes where id_anime = $1');
        const values = [id_anime];
        let result = await pool.query(sql, values);
        pool.end();
        return result.rows;
    }
    catch (error){
        return "Falha ao buscar o anime pelo ID. Descrição do erro: " + error;
    }
}

// Busca o anime pelo nome
exports.getAnimeNome = async function (nome){
    try {
        const pool = new Pool(credenciais);
        const sql = ("select * from dbanime.animes where upper(nome) like upper('%$1%')");
        const values = [nome];
        let result = await pool.query(sql, values);
        pool.end();
        return result.rows;
    }
    catch (error){
        return "Falha ao buscar o anime pelo nome. Descrição do erro: " + error;
    }
}
