import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact-us",
                element: <Contact />
            },
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
])

export default router