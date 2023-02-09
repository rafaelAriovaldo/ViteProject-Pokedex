import express, { Response, Request } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

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
        },
      },
    },
  });
  return res.status(200).json(team);
});

app.post(
  '/pokemons',
  async (req: RequestWithBody<{ name: string; numberPokedex: number; img: string }>, res: Response) => {
    const body = req.body;
    const pokemom = await prisma.pokemon.create({
      data: {
        name: body.name,
        numberPokedex: body.numberPokedex,
        img: body.img,
      },
    });
    res.status(201).json(pokemom);
  },
);

app.post('/teams', async (req: RequestWithBody<{ teamName: string; pokemons: number[] }>, res: Response) => {
  const { teamName, pokemons } = req.body;

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

app.listen(3000);
