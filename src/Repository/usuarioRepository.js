const { Pool } = require("pg");
const credenciais = require('../config/configDB.js');

// Busca o usuário pelo login/email e pela senha
exports.getUsuario = async function (login){
    try {
        const pool = new Pool(credenciais);
        const sql = ("select id_usuario, login, senha, ind_adm, email, img_perfil from dbanime.usuarios where (login = $1 or email = $1)");
        const values = [login];
        let result = await pool.query(sql, values);
        pool.end();
        const objeto = {
            dados: result.rows[0],
            numLinhas: result.rowCount,
            descricao: null,
            indErro: false
        }
        return objeto;
    }
    catch (error){
        return JSON.stringify({
            descricao: "Falha ao buscar o usuário. Descrição do erro: " + error,
            indErro: true
        })
    }
}

// Insere o usuário no banco
exports.postUsuario = async function (login, email, senha){
    try {
        const pool = new Pool(credenciais);
        const sql = ("insert into dbanime.usuarios (login, email, senha) values ($1, $2, $3)");
        const values = [login, email, senha];
        let result = await pool.query(sql, values);
        pool.end();
        const objeto = {
            dados: 'Usuário inserido com sucesso!',
            descricao: null,
            indErro: false
        }
        return objeto;
    }
    catch (error){
        if(error.message == 'duplicate key value violates unique constraint "login_unique"'){
            return JSON.stringify({
                descricao: "Login existente",
                indErro: true
            });
        }
        else if(error.message == 'duplicate key value violates unique constraint "email_unique"'){
            return JSON.stringify({
                descricao: "Email existente",
                indErro: true
            });
        }
        else{
            return JSON.stringify({
                descricao: "Falha ao inserir o usuário. Descrição do erro: " + error,
                indErro: true
            });
        }
    }
}