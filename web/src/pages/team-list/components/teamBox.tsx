export interface TeamProps {
    id: number,
    teamName: string,
    pokemon: [{ name: string, numberPokedex: number, img: string }]

}


export function TeamBox(props: TeamProps): JSX.Element {

    return <> {

        props.pokemon.map(pokemons => {

            return (
                <>
                    <div className=' relative rounded-lg overflow-hidden  border-r-2 border-red-800 '>
                        <img className="" src={pokemons.img} alt="" />
                        <div>
                            <a className='w-1 h-1 font-semibold text-xs  '>
                                N°:{pokemons.numberPokedex}.<br />
                                Nome:{pokemons.name}.
                            </a>
                        </div>
                    </div>
                </>
            )
        })


    }</>


}