import express, { Response,Request } from 'express';
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
app.post('/pokemons', async (req: Request<never, never,{name: string; numberPokedex:number;img:string}, never>, res:Response ) => {
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
app.post('/team', async(req: Request<never, never,{teamName: string;}, never>, res:Response )=>{
        const body = req.body;
        const team = await prisma.team.create({
          data:{
            teamName: body.teamName
          }
        })
        res.send().status(201).json(team)
})

app.post('/team/create/pokemon', async (req: Request<never, never,{teamName: string; pokemon: string[];}, never>, res:Response )=> {
const {teamName, pokemon} = req.body;
       interface pokemon {
        id: number,
        name: string,
        numberPokedex: number
       };
      const team = await prisma.team.update({
        where:{
          id:''
        },
        data:{
          pokemon:{
            connect:{
              id: ''
            },
            Create:{
              teamName: ''
            }
          }
        }
      })
     
res.send('ok').status(201).json(team)
});
    



app.listen(3000);
