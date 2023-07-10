import React from "react";

import classes from "./Header.module.css";

import Navigation from "../Navigation/Navigation";

function Header(props) {
    return (
        <header className={classes["main-header"]}>
            <h1>A Home Page</h1>
            <Navigation
                isLoggedIn={props.isAuthenticated}
                onLogout={props.onLogout}
            />
        </header>
    );
}

export default Header;
