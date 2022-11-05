import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import About from '../pages/About/About';
import Checkout from '../pages/checkout/Checkout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Orders from '../pages/orders/Orders';
import PrivateRoute from '../pages/private/PrivateRoute';
import PublicRoute from '../pages/Public/PublicRoute';
import Register from '../pages/Register/Register';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
            {
                path: '/login',
                element: (
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                ),
            },
            {
                path: '/register',
                element: (
                    <PublicRoute>
                        <Register />
                    </PublicRoute>
                ),
            },
            {
                path: '/checkout/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: (
                    <PrivateRoute>
                        <Checkout />
                    </PrivateRoute>
                ),
            },
            {
                path: '/orders',
                element: (
                    <PrivateRoute>
                        <Orders />
                    </PrivateRoute>
                ),
            },
        ],
    },
]);

export default router;
