import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            
            {
                path: "/",
                element: <Home />
            },
           
        ]
    },  
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/signup",
        element: <Signup />
    },
])

export default routes;