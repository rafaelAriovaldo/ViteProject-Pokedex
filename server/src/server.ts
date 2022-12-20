import express from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const app = express();
app.use(express.json());

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
app.get('/pokemons', async (req, res) => {
  const pokemons = await prisma.pokemon.findMany();
  return res.status(200).json(pokemons);
});

app.post('/pokemons', async (req, res) => {

  const body = req.body;
  const pokemom = await prisma.pokemon.create({
    data: {
      name: body.name,
      numberPokedex: body.numberPokedex
    },
  });
  res.status(201).json(pokemom);
});

app.listen(3000);
