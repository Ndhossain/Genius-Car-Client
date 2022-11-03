import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout() {
    return (
        <>
            <Navbar />
            <main data-theme="light" className="container mx-auto min-h-screen px-5">
                <Outlet />
            </main>
            <Footer />
            <Toaster position="top-center" reverseOrder={false} />
        </>
    );
}

export default Layout;
