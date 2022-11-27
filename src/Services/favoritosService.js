const repository = require('../Repository/favoritosRepository');

exports.getFavoritos = async function () {
    try{
        return await repository.getFavoritos();
    } 
    catch(error){
        return "Erro ao acessar o serviço de buscar a lista de favoritos. Descrição do erro: " + error
    }
}
