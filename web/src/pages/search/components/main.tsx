import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { PokemonBox } from "./pokemonBox";
import axios from "axios";
interface Pokemon {
  id: number;
  name: string;
  numberPokedex: number;
  img: string;
}

export function MainPage() {
  const [search, setSearch] = useState("");
  const [pokemons, setPokemon] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFileteredPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/pokemons").then((res) => {
      setPokemon(res.data), setFileteredPokemon(res.data);
    });
  }, []);

  useEffect(() => {
    setFileteredPokemon(
      pokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search]);

  return (
    <div className=" bg-red-600 w-[1113px] h-auto border rounded-2xl justify-center ml-[25rem] mt-[3rem] flex">
      <main className=" bg-white w-[997px] h-auto border rounded-2xl  ml-[1rem] mt-[2rem] flex ">
        <ul className="flex  flex-wrap gap-3  ">
          {filteredPokemons.map((pokemon) => {
            return (
              <div className=" w-[140px] p-1 m-1">
                <li>
                  {" "}
                  <PokemonBox
                    key={pokemon.id}
                    name={pokemon.name}
                    numberPokedex={pokemon.numberPokedex}
                    img={pokemon.img}
                  />
                </li>
              </div>
            );
          })}
        </ul>
        <input
          type="search"
          className="border"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </main>
      <Link to={"/"} className="h-1 w-1 mt-10">
        <button className=" bg-zinc-300 h-5 w-20 flex justify-center items-center font-inter text-lg hover:bg-zinc-400 rounded-sm  mt-[35rem] ml-[-35rem]">
          Voltar
        </button>
      </Link>
    </div>
  );
}
