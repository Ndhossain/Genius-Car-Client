import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import About from '../pages/About/About';
import Checkout from '../pages/checkout/Checkout';
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
            {
                path: '/checkout/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <Checkout />,
            },
        ],
    },
]);

export default router;
