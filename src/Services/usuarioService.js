const repository = require('../Repository/usuarioRepository');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Valida o login e senha do usuário
exports.getUsuario = async function (login, senha) {
    try{
        const _repository = await repository.getUsuario(login);

        if(_repository.indErro == false){
            if(_repository.numLinhas == 0){
                return "Login ou email inválido!";
            }
            else{
                const validacaoSenha = await bcrypt.compare(senha, _repository.dados.senha);
                if(validacaoSenha == true){
                    return "Sucesso!";
                }
                else{
                    return "Senha incorreta!";
                }
            }
        }
        else{
            //retorna os erros obtidos no Repository
            return _repository;
        }
    } 
    catch(error){
        return "Erro ao acessar o serviço de busca do usuário. Descrição do erro: " + error;
    }
}

// Insere o usuário no banco
exports.postUsuario = async function (login, email, senha) {
    try{
        const hash = bcrypt.hashSync(senha, saltRounds); // Criptografa a senha
        return await repository.postUsuario(login, email, hash);
    } 
    catch(error){
        return "Erro ao acessar o serviço de inserção do usuário. Descrição do erro: " + error;
    }
}