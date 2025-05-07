import React from "react";
import { Outlet } from "react-router";
import "@fontsource-variable/inter";
import "../App.css";

export const Layout = () => {
    return (
        <main className="font-sans min-h-screen bg-gradient-to-b from-indigo-50 to-white flex items-center justify-center px-4">
            <Outlet />
        </main>
    );
};

export default Layout;
