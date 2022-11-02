import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
        ],
    },
]);

export default router;
