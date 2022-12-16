import { Link } from "react-router-dom";

export function Main() {
    return (
        <main>
        <div className=' bg-red-600 w-[1113px] h-[559px] border rounded-2xl justify-center ml-[25rem] mt-[3rem] flex '>

            <form action="/registerPokmeon" method="post" >
                <fieldset className=' bg-white w-[997px] h-[522px] border rounded-2xl justify-center ml-[1rem] mt-[2rem] flex '>

                    <label className=" grid  items-center  w-[797px] h-[422px]   ">

                        <label className="w-[14rem] h-[2rem] bg-gray-300 mt-10 font-inter text-2xl ml-[21rem] flex justify-center rounded-sm ">Cadastro</label>
                        <label className="font-inter text-xl">
                            Tipo:
                            <input className="bg-zinc-300 w-[35rem] ml-[10rem]  " type="text" name="name" />
                        </label>

                        <label className="font-inter text-xl">
                            Nome:
                            <input className="bg-zinc-300  w-[35rem] ml-[9rem] " type="text" name="name" />
                        </label>

                        <label className="font-inter text-xl">
                            Evolução:
                            <input className="bg-zinc-300  w-[35rem]  ml-[7rem]" type="text" name="name" />
                        </label>
                        <label className="font-inter text-xl">
                            Numero na Pokedex:
                            <input className="bg-zinc-300  w-[35rem]  ml-2 " type="text" id="index-pokedex"></input></label>

                        <Link to={'/'} className="h-1 w-1 mt-10"><button className=" bg-zinc-300 h-5 w-20 flex justify-center items-center font-inter text-lg hover:bg-zinc-400 rounded-sm ">Voltar</button></Link>
                    </label>

                    <button type="submit" className="flex flex-col-reverse justify-center items-center bg-zinc-300 h-5 w-20 mt-[25.5rem] mr-5 pl-4 hover:bg-zinc-400 font-inter text-lg rounded-sm p-2" >Enviar</button>

                </fieldset>

            </form>

        </div>
        </main>
    )
} 