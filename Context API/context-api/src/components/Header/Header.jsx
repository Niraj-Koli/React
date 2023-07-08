import React from "react";

import classes from "./Header.module.css";

import Navigation from "../Navigation/Navigation";

function Header() {
    return (
        <header className={classes["main-header"]}>
            <h1>A Home Page</h1>
            <Navigation />
        </header>
    );
}

export default Header;
