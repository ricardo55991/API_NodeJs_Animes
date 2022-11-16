const repository = require('../Repository/episodioRepository');

exports.getEpisodiosTemporadaId = async function () {
    try{
        return repository.getEpisodiosTemporadaId();
    } 
    catch(error){
        return "Erro ao acessar o serviço de buscar os episódios pelo ID da temporada. Descrição do erro: " + error
    }
}

exports.getEpisodioId = async function () {
    try{
        return repository.getEpisodioId();
    } 
    catch(error){
        return "Erro ao acessar o serviço de buscar o episódio pelo ID. Descrição do erro: " + error
    }
}