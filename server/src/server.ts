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
app.get('/pokemons/id', (req,res) =>{
return res.status(200).json([])
});

app.post('', (req,res)=> {
  res.status(201).json([])
});



app.listen(3000) 

