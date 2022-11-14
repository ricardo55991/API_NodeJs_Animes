# Explicação dos comandos:

version: "3.1" versão do compose 

services: setando os serviços 

    db: #nome do serviço 
        image: postgres:14.2-alpine #setando a imagem
        restart: always #definido estratégia de restart
        environment:
            POSTGRES_PASSWORD: example #setando a senha
        ports:
            - "5432:5432" #expondo a porta padrão do postgres

* POSTGRES_USER é OPCIONAL. Se nao setar POSTGRES_USER será usado o padrão "postgres"
* POSTGRES_DB é OPCIONAL. Se nao setar POSTGRES_DB será usado o nome do POSTGRES_USER
* FONTE: https://hub.docker.com/_/postgres
* Versão alpine é a versão mais leve, por isso foi usada no exemplo