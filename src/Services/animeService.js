const repository = require('../Repository/animeRepository');

exports.GetHora = async function () {
    try{
        return await repository.GetHora();
    } 
    catch(error){
        return "Erro ao acessar o serviço de Hora. Descrição do erro: " + error
    }
}

exports.getAnimes = async function () {
    try{
        return await repository.getAnimes();
    } 
    catch(error){
        return "Erro ao acessar o serviço de busca dos animes. Descrição do erro: " + error
    }
}

exports.getAnimeId = async function () {
    try{
        return await repository.getAnimeId();
    } 
    catch(error){
        return "Erro ao acessar o serviço de busca do anime pelo ID. Descrição do erro: " + error
    }
}

exports.getAnimeNome = async function () {
    try{
        return await repository.getAnimeNome();
    } 
    catch(error){
        return "Erro ao acessar o serviço de busca do anime pelo nome. Descrição do erro: " + error
    }
}