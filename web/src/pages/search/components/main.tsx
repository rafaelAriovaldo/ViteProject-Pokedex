import { Link } from "react-router-dom";

export function MainPage() {
    return (
        <div className=' bg-red-600 w-[1113px] h-[559px] border rounded-2xl justify-center ml-[25rem] mt-[3rem] flex'>
            <main className=' bg-white w-[997px] h-[522px] border rounded-2xl justify-center ml-[1rem] mt-[2rem] flex '>
            <Link to={'/'} className="h-1 w-1 mt-10"><button className=" bg-zinc-300 h-5 w-20 flex justify-center items-center font-inter text-lg hover:bg-zinc-400 rounded-sm  mt-[25rem] ml-[-5rem]">Voltar</button></Link>
            </main>
        </div>
    )
}