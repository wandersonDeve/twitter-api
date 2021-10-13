<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Para Rodar o Projeto

```bash
# Criar Usuario - acessar Formato JASON
http://localhost/3000/users/create_account

# Fazer login - acessar Formato JASON
http://localhost/3000/auth/login

# Encontrar Usuario unico
http://localhost/3000/users/(username)

# Atualizar dados do usuario - acessar Formato JASON
http://localhost/3000/users/update/(username)

# Deleta um usuario
http://localhost/3000/users/delete/(username)

# Criar um Tweet - acessar Formato JASON
http://localhost/3000/tweets

# Buscar Tweet por ID - onde id=numero
http://localhost/3000/tweets/(id)

# Atualizar Tweet por ID - acessar Formato JASON
http://localhost/3000/tweets/update/(id)

# Like um post - onde id=numero - acessar Formato JASON
http://localhost/3000/like/(id)

# Dislike um post
http://localhost/3000/like/dislike/(id)

# Follow and Unfollow - id referente a pessoa a ser seguida
http://localhost/3000/follow/(id)

```

## Formato JASON

```JSON
 // Para criar e atualizar a conta
  {
    "username":"usernameTeste",
    "email":"teste_email@email.com",
    "password":"12345678",
    "displayName":"Name",
    "birth":"12/01/1234",
    "bio":"No pain no gain"
}

// Para fazer Login
{
    "username":"usernameTeste",
    "password":"12345678"
}

// Para criar e atualizar um Tweet
{
    "text": "Fabio é o guitarrista da banda Quinta Justa, e Marcus é o baixista",
    "userId":2
}

// Para dar like em um tweet
{
  "tweetId": 3,
  "userId": 2
}
```
