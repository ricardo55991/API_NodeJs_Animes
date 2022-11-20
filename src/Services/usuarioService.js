const repository = require('../Repository/usuarioRepository');
const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const myPlaintextPassword = 'teste123';

// bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
//         console.log(hash)
//     });
// });

// talvez tenha que adicionar o nome na function, ex: function getUsuario(loginOuEmail, senha)
exports.getUsuario = async function (loginOuEmail, senha) {
    try{
        const usuario = await repository.getUsuario(loginOuEmail);

        if(usuario.length == 0){
            return "Login ou email inválido!";
        }
        else{
            const validacaoSenha = await bcrypt.compare(senha, usuario.senha);
            if(validacaoSenha == true){
                return "Sucesso!";
            }
            else{
                return "Senha incorreta!";
            }
        }
    } 
    catch(error){
        return "Erro ao acessar o serviço de buscar os episódios pelo ID da temporada. Descrição do erro: " + error;
    }
}