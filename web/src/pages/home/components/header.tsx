import pokeballLeft from '../../../assets/pokeballLeft.png';
import pokeballRight from '../../../assets/rightPokeboll.png'

export function Header() {
    return (
        <header>
            <div id='pokebola' className='w-[386px] flex '>

                <img className='w-[386px] h-[384px] pb-12' src={pokeballLeft} alt='not found' />
                <img className='w-[386px] h-[384px] pb-12 ml-[87rem]' src={pokeballRight} alt='not found' />

            </div>
        </header>
    )
}