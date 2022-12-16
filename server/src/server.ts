import express from 'express';

const app = express();

app.get('/abc', (req, res) => {
    
  return res.json([
    {
      id: 1,
      name: 'teste pokedex',
    },
    {
      id: 2,
      name: 'Pikaroto',
    },
  ]);
});

app.listen(3000) 

