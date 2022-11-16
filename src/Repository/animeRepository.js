const { Pool } = require("pg");
const credenciais = require('../configDB.js');

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
exports.getAnimes = async function (){
    try{
        const pool = new Pool(credenciais);
        const sql = await pool.query('select * from dbanime.animes')
        pool.end();
        return sql.rows;
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
        const sql = ("select * from animes a where upper(a.nome) like upper('%$1%')");
        const values = [nome];
        let result = await pool.query(sql, values);
        pool.end();
        return result.rows;
    }
    catch (error){
        return "Falha ao buscar o anime pelo nome. Descrição do erro: " + error;
    }
}

// // Metódo de adicionar um anime
// export async function postAnime(req, res){
//     let anime = req.body;
//     openDb().then(db=>{
//         db.run('insert into animes (nome, descricao, img_logo, dublado, legendado, avaliacao, id_categoria) values (?, ?, ?, ?, ?, ?)', 
//         [anime.nome, anime.descricao, anime.img_logo, anime.dublado, anime.legendado, anime.avaliacao, anime.id_categoria]);
//     });
//     res.json({
//         "statusCode": 200
//     })
// }

// // Metódo de editar um anime
// export async function putAnime(req, res){
//     let anime = req.body;
//     openDb().then(db=>{
//         db.run('update animes set nome=?, descricao=?, img_logo=?, dublado=?, legendado=?, avaliacao=?, id_categoria=? where id_anime=?', 
//         [anime.nome, anime.descricao, anime.img_logo, anime.dublado, anime.legendado, anime.avaliacao, anime.id_categoria, anime.id_anime]);
//     });
//     res.json({
//         "statusCode": 200
//     })
// }

// // Metódo de deletar um anime
// export async function deleteAnime(req, res){
//     let id = req.body.id_anime;
//     openDb().then(db=>{
//         db.get('delete from anime where id_anime=?', [id])
//         .then(res=>res)
//     });
//     res.json({
//         "statusCode": 200
//     })
// }