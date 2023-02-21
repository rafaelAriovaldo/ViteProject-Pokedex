import { Link } from "react-router-dom"
export function Containner() {
    return (
        <div className=' bg-red-600 w-[887px] h-[207px] border rounded-2xl justify-center ml-[32rem] mt-[5rem]  flex align-middle'>
        
            <h1 className=' flex flex-col-reverse p-9   bg-[url("/src/assets/Pokebola.png")] w-56 bg-no-repeat mr-[40rem] font-inter text-2xl '>PoKeDeX.....
            
                <h2 className=" pl-[18rem] p-7 w-[50rem]   h-20 font-inter text-xl"><Link to={'/'}>Liste seus Times!!</Link></h2>
                
            </h1>
        </div>

    )
}