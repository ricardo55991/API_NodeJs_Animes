const repository = require('../Repository/favoritosRepository');

exports.getFavoritos = async function (id_usuario) {
    try{
        return await repository.getFavoritos(id_usuario);
    } 
    catch(error){
        return "Erro ao acessar o serviço de buscar a lista de favoritos. Descrição do erro: " + error
    }
},

exports.postFavorito = async function (id_usuario, id_anime) {
    try{
        return await repository.postFavorito(id_usuario, id_anime);
    } 
    catch(error){
        return "Erro ao acessar o serviço de inserção do favorito. Descrição do erro: " + error
    }
},

exports.deleteFavorito = async function (id_usuario, id_anime) {
    try{
        return await repository.deleteFavorito(id_usuario, id_anime);
    } 
    catch(error){
        return "Erro ao acessar o serviço de remoção do favorito. Descrição do erro: " + error
    }
}
