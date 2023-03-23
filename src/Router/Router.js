import { createBrowserRouter } from "react-router-dom";
import Deshboard from "../Layout/Deshboard/Deshboard";
import Main from "../Layout/Main/Main";
import About from "../Pages/About";
import Card from "../Pages/Card";
import Home from "../Pages/Home";
import TopRated from "../Pages/TopRated";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/top-rated', element: <TopRated></TopRated>
            },
            {
                path: '/about', element: <About></About>
            },
            {
                path: '/card', element: <Card></Card>
            }
        ]
    },
    {
        path: '/deshboard', element: <Deshboard />
    }
])