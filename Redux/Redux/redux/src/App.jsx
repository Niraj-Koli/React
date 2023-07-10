import React, { Fragment } from "react";

import { useSelector } from "react-redux";

import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import Auth from "./components/Auth/Auth";
import Profile from "./components/Profile/Profile";

function App() {
    const isAuth = useSelector((state) => state.auth.isAuthenticated);

    return (
        <Fragment>
            <Header />
            {!isAuth && <Auth />}
            {isAuth && <Profile />}
            <Counter />
        </Fragment>
    );
}

export default App;
