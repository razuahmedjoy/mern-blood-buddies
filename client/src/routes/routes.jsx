import { createBrowserRouter } from 'react-router-dom';
import RequireAuth from '../components/RequireAuth';
import Main from '../layout/Main';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
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
            {
                path: "/profile",
                element: <RequireAuth><Profile /></RequireAuth>
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