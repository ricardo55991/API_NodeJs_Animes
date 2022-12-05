const repository = require('../Repository/usuariosRepository');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Valida o login e senha do usuário
exports.getUsuario = async function (usuario, senha) {
    try{
        const _repository = await repository.getUsuario(usuario);

        if(_repository.indErro == false){
            if(_repository.numLinhas == 0){
                return {
                    indErro: true,
                    descricao: "Usuário ou email inválido!"
                };
            }
            else{
                const validacaoSenha = await bcrypt.compare(senha, _repository.dados.senha);
                if(validacaoSenha == true){
                    _repository.descricao = "Login validado com sucesso!";
                    delete _repository.dados.senha;
                    return _repository;
                }
                else{
                    return {
                        indErro: true,
                        descricao: "Senha incorreta!"
                    };
                }
            }
        }
        else{
            //retorna os erros obtidos no Repository
            return _repository;
        }
    } 
    catch(error){
        return {
            descricao: "Erro ao acessar o serviço de busca do usuário. Descrição do erro: " + error,
            indErro: true
        }
    }
}

// Insere o usuário no banco
exports.postUsuario = async function (usuario, email, senha) {
    try{
        const hash = bcrypt.hashSync(senha, saltRounds); // Criptografa a senha
        return await repository.postUsuario(usuario, email, hash);
    } 
    catch(error){
        return {
            descricao: "Erro ao acessar o serviço de inserção do usuário. Descrição do erro: " + error,
            indErro: true
        }
    }
},

exports.putUsuario = async function (email, senha, id_usuario) {
    try{
        const hash = bcrypt.hashSync(senha, saltRounds)
        return await repository.putUsuario(email, hash, id_usuario);
    } 
    catch(error){
        return {
            descricao: "Erro ao acessar o serviço de atualização do usuário. Descrição do erro: " + error,
            indErro: true
        }
    }
}