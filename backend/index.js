const express = require('express'); //importando o módulo express para a váriavel

const app = express();

app.get('/', (request, response) => {
  return response.json({
    evento: 'Aprimorando meus conhecimentos na semana OmniStack 11.0',
    aluno: 'Júlia Gonzaga'
  });
});

app.listen('3333')