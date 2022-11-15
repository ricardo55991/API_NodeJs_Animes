const { json } = require('express');
const repository = require('../Repository/animesRepository');

exports.GetHora = async function () {
    try{
        return repository.GetHora();
    } 
    catch(error){
        return "Erro ao acessar o serviço de Hora. Descrição do erro: " + error
    }
  }