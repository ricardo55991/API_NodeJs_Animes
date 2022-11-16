const repository = require('../Repository/temporadaRepository');

exports.getTemporadasIdAnime = async function () {
    try{
        return repository.getTemporadasAnimeId();
    } 
    catch(error){
        return "Erro ao acessar o serviço de buscar as temporadas pelo ID do anime. Descrição do erro: " + error
    }
  }