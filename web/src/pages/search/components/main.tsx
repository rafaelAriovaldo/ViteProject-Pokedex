import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { PokemonBox } from "./pokemonBox";
import axios from "axios";

export function MainPage() {
    interface Pokemon {
        id: number,
        name: string,
        numberPokedex: number,
        img: string
    }
    const [pokemons, setPokemon] = useState<Pokemon[]>([]);
    useEffect(() => {
        axios.get('http://localhost:5000/pokemons').then(res => {
            setPokemon(res.data)
        })
    }, [])
    return (
        <div className=' bg-red-600 w-[1113px] h-auto border rounded-2xl justify-center ml-[25rem] mt-[3rem] flex'>
            <main className=' bg-white w-[997px] h-auto border rounded-2xl  ml-[1rem] mt-[2rem] flex '>
                <ul className="flex  flex-wrap gap-3  ">
                    {
                        pokemons.map(pokemon => {
                            return (

                                <div className=" w-[140px] p-1 m-1">

                                    <li > <PokemonBox
                                        key={pokemon.id}
                                        name={pokemon.name}
                                        numberPokedex={pokemon.numberPokedex}
                                        img={pokemon.img}

                                    />

                                    </li>
                                </div>

                            )
                        })

                    }
                </ul>

            </main>
            <Link to={'/'} className="h-1 w-1 mt-10"><button className=" bg-zinc-300 h-5 w-20 flex justify-center items-center font-inter text-lg hover:bg-zinc-400 rounded-sm  mt-[35rem] ml-[-35rem]">Voltar</button></Link>
        </div>

    )
}