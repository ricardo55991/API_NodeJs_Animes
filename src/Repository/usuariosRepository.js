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
        const objeto = {
            dados: null,
            numLinhas: null,
            descricao: "Falha ao buscar o usuário. Descrição do erro: " + error,
            indErro: true
        }
        return objeto;
    }
}

// Insere o usuário no banco
exports.postUsuario = async function (login, email, senha){
    try {
        const pool = new Pool(credenciais);
        const sql = ("insert into dbanime.usuarios (login, email, senha) values ($1, $2, $3)");
        const values = [login, email, senha];
        await pool.query(sql, values);
        pool.end();
        const objeto = {
            descricao: 'Usuário inserido com sucesso!',
            indErro: false
        }
        return objeto;
    }
    catch (error){
        if(error.message == 'duplicate key value violates unique constraint "login_unique"'){
            const objeto = {
                descricao: "Login existente",
                indErro: true
            }
            return objeto;
        }
        else if(error.message == 'duplicate key value violates unique constraint "email_unique"'){
            const objeto = {
                descricao: "Email existente",
                indErro: true
            }
            return objeto;
        }
        else{
            const objeto = {
                descricao: "Falha ao inserir o usuário. Descrição do erro: " + error,
                indErro: true
            }
            return objeto;
        }
    }
}

exports.putUsuario = async function (email, senha, id_usuario){
    try {
        const pool = new Pool(credenciais);
        const sql = (`UPDATE dbanime.usuarios 
                    SET email = $1,
                        senha = $2
                    WHERE id_usuario = $3`);
        const values = [email, senha, id_usuario];
        await pool.query(sql, values);
        pool.end();
        const objeto = {
            descricao: 'Usuário atualizado com sucesso!',
            indErro: false
        }
        return objeto;
    }
    catch (error){
        const objeto = {
            descricao: "Falha ao atualizar o usuário. Descrição do erro: " + error,
            indErro: true
        }
        return objeto;
    }
}