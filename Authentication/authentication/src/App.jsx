import React, { useContext } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import AuthPage from "./pages/AuthPage";
import StartingPage from "./pages/StartingPage";

import AuthContext from "./context/AuthContext";

import Layout from "./components/Layout/Layout";
import Profile from "./components/Profile/Profile";

function App() {
    const authCtx = useContext(AuthContext);

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<StartingPage />} />
                {!authCtx.isLoggedIn && (
                    <Route path="/auth" element={<AuthPage />} />
                )}
                {authCtx.isLoggedIn && (
                    <Route path="/profile" element={<Profile />} />
                )}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Layout>
    );
}

export default App;
