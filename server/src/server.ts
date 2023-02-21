import express, { Response, Request } from 'express';
import { PrismaClient } from '@prisma/client';
var cors = require('cors');

const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.use(cors());

type RequestWithBody<BodyType> = Request<never, never, BodyType, never>;

app.get('/pokemons', async (req, res) => {
  const pokemons = await prisma.pokemon.findMany();
  return res.status(200).json(pokemons);
});

app.get('/teams', async (req, res) => {
  const team = await prisma.team.findMany({
    include: {
      pokemon: {
        select: {
          name: true,
          numberPokedex: true,
          img:true
        },
      },
    },
  });
  return res.status(200).json(team);
});

app.post(
  '/pokemons',
  async (req: RequestWithBody<{ name: string; numberPokedex: number; img: string; }>, res: Response) => {
    const body = req.body;
    
    const lowerCase = String;
    const lowerCasePokemon = lowerCase(body.name.toLowerCase());
    const verifyPokemon = await prisma.pokemon.findMany({
      select: {
        name: true,
        numberPokedex: true,
      },
      where: {
        OR: [
          {
            numberPokedex: body.numberPokedex,
          },
          {
            name: lowerCasePokemon,
          },
        ],
      },
    });
    if (verifyPokemon.some((pokemom) => pokemom.name === lowerCasePokemon)) {
      return res.status(400).json({
        error: 'Pokemon name already registered in the bank!',
      });
    }
    if (verifyPokemon.some((pokemom) => pokemom.numberPokedex === body.numberPokedex)) {
      return res.status(400).json({
        error: 'Pokemon number already registered in the bank!',
      });
    }
    if (!body.name && !body.numberPokedex) {
      return res.status(400).json({
        error: 'fill in the fields correctly!',
      }); //important
    }
    if(!body.name){
      return res.status(400).json({
        error:'fill in the fields correctly!'
      })
    };
    if(!body.numberPokedex){
      return res.status(400).json({
        error:'fill in the fields correctly!'
      })
    }
    const pokemonNumber = body.numberPokedex;
    const pokemom = await prisma.pokemon.create({
      data: {
        name: body.name,
        numberPokedex: body.numberPokedex,
        img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ pokemonNumber }.png`
      },
    });

    return res.status(201).json(pokemom);
  },
);

app.post('/teams', async (req: RequestWithBody<{ teamName: string; pokemons: number[] }>, res: Response) => {
  const { teamName, pokemons } = req.body;

  if (pokemons.length > 6) {
    return res.status(400).json({
      error: 'Only six pokemons on each team!',
    });
  }
  if (pokemons.length <= 0) {
    return res.status(400).json({
      error: 'There must be at least one pokémon on each team!',
    });
  }
  const teamT = await prisma.team.create({
    data: {
      teamName: teamName,
      pokemon: {
        connect: pokemons.map((arr) => {
          return { id: arr };
        }),
      },
    },
    include: {
      pokemon: true,
    },
  });
  return res.status(201).json(teamT);
  /*
    const arr = pokemons.map((poke) => {
      return {
        arr: poke,
      };
      */
});

app.delete(`/pokemon/:id`, async (req, res) => {
  const { id } = req.params;
  const pokomonDeleted = await prisma.pokemon.delete({
    where: {
      id: Number(id),
    },
  });
  return res.status(200).json(pokomonDeleted);
});

app.delete(`/teams/:id`, async (req, res) => {
  const { id } = req.params;
  const teamDeleted = await prisma.team.delete({
    where: {
      id: Number(id),
    },
  });
  return res.status(200).json(teamDeleted);
});

app.listen({
  port: 5000,
});
