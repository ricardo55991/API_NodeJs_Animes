const { Pool } = require("pg");
const credenciais = require('../config/configDB.js');

// Busca o usuário pelo login/email e pela senha
exports.getUsuario = async function (loginOuEmail){
    try {
        const pool = new Pool(credenciais);
        const sql = ("select id_usuario, login, senha, ind_adm, email, img_perfil from dbanime.usuarios where (login = $1 or email = $1)");
        const values = [loginOuEmail];
        let result = await pool.query<Object>(sql, values);
        pool.end();
        return result;
    }
    catch (error){
        return JSON.stringify({
            descricao: "Falha ao buscar o usuário. Descrição do erro: " + error,
            indErro: true
        })
    }
}
