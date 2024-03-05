import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";
import Proker from "../pages/Proker";
import Gallery from "../pages/Gallery";
import Team from "../pages/Team";
import Details from "../pages/Details";
import NotFound from "../pages/NotFound";

const AppRouter = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'proker',
                element: <Proker />,
            },
            {
                path: 'proker/:id',
                element: <Details />
            },
            {
                path: 'gallery',
                element: <Gallery />
            },
            {
                path: 'team',
                element: <Team />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
])

export default AppRouter