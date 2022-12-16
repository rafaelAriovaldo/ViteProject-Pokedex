import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { RegisterPokemonPage } from '../pages/registration/RegistrationPage'
import { SearchPage } from '../pages/search/SearchPage'
export const router = createBrowserRouter([
    {
        path:"/",
        element:<HomePage/>,
    },
    {
        path:"/pokemom/register",
        element:<RegisterPokemonPage/>,
    },
    {
        path:"/search",
        element:<SearchPage/>
    }
])