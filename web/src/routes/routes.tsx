import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { RegisterPokemonPage } from '../pages/registration/RegistrationPage'
import { SearchPage } from '../pages/search/SearchPage'
import { TeamListPage } from "../pages/team-list/TeamListPage";
export const router = createBrowserRouter([
    {
        path:"/",
        element:<HomePage/>,
    },
    {
        path:"/pokemom",
        element:<RegisterPokemonPage/>,
    },
    {
        path:"/search",
        element:<SearchPage/>
    },
    {
        path:"/teamList",
        element:<TeamListPage/>
    }
])