# Bootcamp Rocketseat - estudo de NodeJS

## Criando aplicação

    $ yarn init -y

#### Express

Micro-framework do Node que dá funcionalidades padrões para todo tipo de aplicação

    $ yarn add express

/index.js - vai ser o ponto de entrada da aplicação. Nela será criado o servidor:

    * importar express

    * chamar express - const server = express()

    * definir porta - server.listen(n° da porta)

## Query e Route params

Consumindo Query e Route Params

    Para rota '/users
    req.query.name

    url - http://localhost:3000/users/name=nomedouser

Para rota '/users/:id

    url - http://localhost:3000/users/id
