//
import React from "react";
import { Outlet } from "react-router";
import "@fontsource-variable/inter";
import "../App.css";
import { FaGithub } from "react-icons/fa";

export const Layout = () => {
    return (
        <main className="font-sans min-h-screen flex flex-col bg-gradient-to-b from-indigo-50 to-white">
            <div className="flex-grow flex items-center justify-center px-4">
                <Outlet />
            </div>
            <footer className="w-full mx-auto max-w-screen-xl p-4">
                <span className="text-sm text-gray-500 text-center block dark:text-gray-400">
                    ©
                    <a
                        href="https://www.hamk.fi/en/student-pages/planning-your-studies/design-factory/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline inline-flex items-center ml-1"
                    >
                        HAMK Design Factory 2025
                    </a>{" "}
                    | Version 0.1 | Design and prototype made by
                    <a
                        href="https://github.com/qwertygehaktbal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline inline-flex items-center ml-1"
                    >
                        <FaGithub className="mr-1" />
                        Daan Bakema
                    </a>
                </span>
            </footer>
        </main>
    );
};

export default Layout;
