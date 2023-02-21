import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { TeamBox, TeamProps } from './teamBox';


import axios from "axios";

export function ListMainPage() {


    const [teams, setTeam] = useState<TeamProps[]>([]);

    useEffect(() => {
        axios.get('http://localhost:5000/teams').then(res => {
            setTeam(res.data)

        })

    }, [])

    return (
        <div className=' bg-red-600 w-[1113px] h-auto border rounded-2xl justify-center ml-[25rem] mt-[3rem] flex'>

            <main className=' bg-white w-[997px] h-auto border rounded-2xl  ml-[1rem] mt-[2rem]  flex '>

                <ul className="flex  flex-wrap  gap-3  ">


                    {

                        teams.map(team => {
                            return (

                                <div className=" w-[140px] p-1 m-1">
                                    <a className="font-semibold">{team.teamName}:</a>
                                    <li> <TeamBox
                                        id={team.id}
                                        teamName={team.teamName}
                                        pokemon={team.pokemon}
                                    />

                                    </li>
                                </div>

                            )
                        })

                    }


                </ul>

            </main>

        </div>

    )

}