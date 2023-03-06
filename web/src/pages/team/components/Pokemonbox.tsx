
type PokemonProps = {
    id: number,
    name: string,
    numberPokedex: number,
    img: string,

}


export function PokemonBox(props: PokemonProps) {

    return (
        <ul>
            <li>
                <label className=' block cursor-pointer relative rounded-lg overflow-hidden  border-r-2 border-red-800 '>
                    <img className="" src={props.img} />

                    <a className='w-1 h-1 font-semibold text-xs  '>
                        N°:{props.numberPokedex}.<br />
                        Nome:{props.name}.
                    </a>
                    <input name="pokemon" value={props.id}  type={'checkbox'}  />
                </label>
            </li>
        </ul>
    )
}
