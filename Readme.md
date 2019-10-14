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

## Middlewares

Middleware é uma função que recebe os parâmetros req e res e manipula os dados, as informações, que estão na requisição e retorna ou não respostas para o usuário.

#### Middleware global

Não importa a rota que seja acessada, este middleware sempre vai ser chamado.

server.use((req, res) => {})

Porém o middleware global bloqueia o fluxo da aplicação. Então deve-se usar como terceiro parâmetro a função next:

    server.use((req, res, next) => {

      return next();

    })

Agora vai ser executado o próximo middleware que satisfizer as condições da aplicação.

Na aula, mostra como pode criar um middleware de log para se saber todas as rotas que se está chamando

    server.use((req, res, next) => {
      console.log(método: ${req.method}; ${req.url} ) ...

#### Middleware local

É aplicado diretamente na rota.

A function checkUserExists - vai ser um middleware para verificar se o usuário está descrito no body. Se não estiver, vai retornar um erro:

    return res.status(400)

400 -> bad request (falta informação)

Middleware para verificar se o index que o usuário passou nos parâmetros retorna um usuário presente dentro do array users

function checkUserInArray()

Toda rota que usa a checkUserInArray vai ter acesso a req.user - user

## Debugando aplicação

Debugar aplicação no VsCode.

Será criada uma pasta .vscode e dentro, o arquivo launch.json, que já vem configurado.

Adicionar break point na linha que se quer testar clicar em play e executar a aplicação referente ao trecho de código selecionado.

Na parte 'watch' do debuger, é possível adicionar variáveis para monitorar seus valores.

#### aplicação finalizada
