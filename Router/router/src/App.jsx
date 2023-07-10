import React from "react";

import { Route, Routes, Navigate } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import Details from "./pages/Details";
import User from "./pages/User";

import Header from "./components/Header/Header";

function App() {
    return (
        <div>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Navigate to="/welcome" />} />
                    <Route path="/welcome" element={<Welcome />}>
                        <Route path="/welcome/user" element={<User />} />
                    </Route>
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:productId" element={<Details />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
