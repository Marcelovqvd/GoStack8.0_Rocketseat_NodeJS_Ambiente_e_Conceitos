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

## Insomnia

Software para testar as rotas

## Nodemon

Reinicia o servidor de foram automática

    $ yarn add nodemon -D

Em package.json criar script "dev": "nodemon index.js"

Agora com o comando 'yarn dev' já é possível executar o nodemon

## CRUD

Rotas:

- listar todos os users:
  http://localhost:3000/users
  método get

* listar um usuário:
  http://localhost:3000/users/index da posição do array
  método get

* criação de novo user:
  http://localhost:3000/users
  método post

#### Erro:

    TypeError: Cannot destructure property `user` of 'undefined' or 'null'.

Este erro se dá devido ao express ter várias formas de receber informações como corpo da requisição. Uma delas é utilizando json. Mas, para ser possível que o express leia json é preciso passar o plugin/módulo

    server.use(express.json())

- edição de user
  http://localhost:3000/users/index da posição do array
  método put

* deletar user
  http://localhost:3000/users/index da posição do array
  método delete

Utilizar o método de array splice(). O Splice percorre o vetor até o index informado e deleta tantas posições que se informar a partir do index informado.

Neste caso:

    users.splice(index, 1);
