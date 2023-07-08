import React, { Fragment, useContext } from "react";

import AuthContext from "./context/AuthContext";

import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

function App() {
    const ctx = useContext(AuthContext);

    return (
        <Fragment>
            <Header />
            <main>
                {!ctx.isLoggedIn && <Login />}
                {ctx.isLoggedIn && <Home />}
            </main>
        </Fragment>
    );
}

export default App;
