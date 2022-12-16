import { Link } from "react-router-dom"


export function Main() {
    return (
        <div className=' bg-red-600 w-[1113px] h-[559px] border rounded-2xl justify-center ml-[25rem] mt-[3rem] flex '>
            <div className=' bg-white w-[897px] h-[522px] border rounded-2xl justify-center ml-[1rem] mt-[2rem]  flex'>
                <nav className=" mr-[0rem] p-14 font-Im-feel text-2xl">
                    <div className="flex gap-40">
                        <h1 className=""><Link to={'/pokemom/register'} className="font-Im fell Englesh hover:bg-slate-100 rounded-lg">Cadastre</Link></h1>
                        <h1 className=""><a href="" className="hover:bg-slate-100 rounded-lg">Crie seu time</a></h1>
                        <h1 className=""><Link to={'/search'} className="hover:bg-slate-100 rounded-lg">Pesquise</Link></h1>
                    </div>
                    <h2 className="flex justify-center pt-[10rem] text-8xl">POKEDEX</h2>
                </nav>

            </div>

        </div>
    )
}