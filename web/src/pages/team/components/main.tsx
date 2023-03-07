import { Link } from 'react-router-dom';
import { useState, useEffect, FormEvent } from 'react';
import { PokemonBox } from "./Pokemonbox";
import axios from "axios";

interface Pokemon {
    id: number,
    name: string,
    numberPokedex: number,
    img: string,
}

export function TeamMain() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        axios.get('http://localhost:5000/pokemons').then(res => {
            setPokemons(res.data)
        })
    }, []);

    async function createNewTeam(event: FormEvent) {
        event.preventDefault();
        /* const form = event.target as HTMLFormElement;
         form.reset();*/
        const form = new FormData(event.target as HTMLFormElement);
        const TeamData = {
            teamName: form.get("teamName"),
            pokemons: (form.getAll("pokemon")),
        }
        /*const data = Object.fromEntries(form.entries())
        data.pokemon = Object(form.getAll('pokemon').map((Number)));
        data.teamName = Object(form.get('teamName')) */
        try {
            const response = await axios.post(`http://localhost:5000/teams`, {
                "teamName": TeamData.teamName,
                "pokemons": TeamData.pokemons.map(Number),
                Headers: {
                    'Content-Type': 'application/json'
                }
            })
            alert('Pokemon cadastrado com sucesso!')
        } catch (error) {
            alert('error! campos preenchidos de forma incorreta!')
            console.log(TeamData)
        }
        const resetForm = event.target as HTMLFormElement;
        resetForm.reset();
    }

    return (
        <div id='my form'>
            <form onSubmit={createNewTeam}>
                <fieldset className="mt-5">
                    <label htmlFor='teamName' className='ml-[45rem]'>Nome do Time:
                        <input name="teamName" id="teamName" type="text" className="  ml-1 border-red-800 items-center bg-slate-50 rounded-lg" placeholder="nome do  time???" />
                    </label>
                    <button type="submit" className="ml-5 bg-red-400 hover:bg-red-600 w-20 rounded-md">Enviar</button>

                    <div className=' bg-red-600 w-[1113px] h-auto border rounded-2xl justify-center ml-[25rem] mt-[3rem] flex'>
                        <main className=' bg-white w-[997px] h-auto border rounded-2xl  ml-[1rem] mt-[2rem] flex '>
                            <ul className="flex  flex-wrap gap-3  ">
                                {pokemons.map(pokemon => {
                                    return (

                                        <div key={pokemon.id} className=" w-[140px] p-1 m-1">

                                            <PokemonBox

                                                id={pokemon.id}
                                                name={pokemon.name}
                                                numberPokedex={pokemon.numberPokedex}
                                                img={pokemon.img}

                                            />

                                        </div>

                                    )
                                })
                                }
                            </ul>
                        </main>
                        <Link to={'/'} className="h-1 w-1 mt-10"><button className=" bg-zinc-300 h-5 w-20 flex justify-center items-center font-inter text-lg hover:bg-zinc-400 rounded-sm  mt-[35rem] ml-[-35rem]">Voltar</button></Link>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}