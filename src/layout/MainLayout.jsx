import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div
            className="min-h-screen bg-blue-50 text-gray-800"
        >
            {/* Overlay effect for soft look */}
            <div className="backdrop-blur-sm  min-h-screen">
                <Navbar />

                <div className="max-w-6xl mx-auto px-4 py-8">
                    <Outlet />
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;