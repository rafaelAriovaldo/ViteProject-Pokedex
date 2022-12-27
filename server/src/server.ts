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
app.get('/team/members', async (req, res) => {
  const team = await prisma.team.findMany({
    include: {
      pokemon: {
        select: {
          name: true,
          numberPokedex: true,
        },
      },
    },
  });
  return res.status(200).json(team);
});

app.get('/team', async (req, res) => {
  const team = await prisma.team.findMany();
  return res.status(200).json(team);
});
app.post('/pokemons', async (req, res) => {
  const body = req.body;
  const pokemom = await prisma.pokemon.create({
    data: {
      name: body.name,
      numberPokedex: body.numberPokedex,
      img: body.img,
    },
  });
  res.status(201).json(pokemom);
});

app.post('/team/teamName', async (req, res) => {
  const body = req.body;
  const team = await prisma.team.create({
    data: {
      teamName: body.teamName,
    },
  });

  res.status(201).json(team);
});
app.post('/team/create', async (req,res)=>{
  const body = req.body 
 const teamId = [6]
  const teamCreated = await prisma.team.create({
    data:{
      teamName: body.teamName,
      pokemon:{
        
      }
  
    },
   
  
  })
  res.status(201).json(teamCreated)
})

app.listen(3000);
