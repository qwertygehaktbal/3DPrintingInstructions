import React from "react";
import Home from "./pages/Home";
import Tutorial from "./pages/Tutorial";
import Instructions from "./pages/Instructions";
import Test from "./pages/Test";
import End from "./pages/End";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";

export const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Layout />}
                >
                    <Route
                        index
                        element={<Home />}
                    />
                    <Route
                        path="/tutorial"
                        element={<Tutorial />}
                    />
                    <Route
                        path="/test"
                        element={<Test />}
                    />
                    <Route
                        path="/instructions"
                        element={<Instructions />}
                    />
                    <Route
                        path="/end"
                        element={<End />}
                    />
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default App;
