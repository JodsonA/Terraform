const express = require('express');
const app = express();

const jogos = [
  { time1: 'São Paulo', time2: 'Palmeiras', data: '2023-04-01', estadio: 'Morumbi' },
  { time1: 'Flamengo', time2: 'Corinthians', data: '2023-04-02', estadio: 'Maracanã' },
  { time1: 'Grêmio', time2: 'Internacional', data: '2023-04-02', estadio: 'Arena do Grêmio' }
];

app.get('/jogos', (req, res) => {
  res.json(jogos);
});

app.listen(4566, () => {
  console.log('Servidor rodando na porta 4566!');
});