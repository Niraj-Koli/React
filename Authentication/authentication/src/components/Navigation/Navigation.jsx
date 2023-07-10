import React, { useContext } from "react";

import classes from "./Navigation.module.css";

import { Link } from "react-router-dom";

import AuthContext from "../../context/AuthContext";

function Navigation() {
    const authCtx = useContext(AuthContext);

    const isLoggedIn = authCtx.isLoggedIn;

    function logoutHandler() {
        authCtx.logout();
    }

    return (
        <header className={classes.header}>
            <Link to="/">
                <div className={classes.logo}>React Auth</div>
            </Link>
            <nav>
                <ul>
                    {!isLoggedIn && (
                        <li>
                            <Link to="/auth">Login</Link>
                        </li>
                    )}
                    {isLoggedIn && (
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                    )}
                    {isLoggedIn && (
                        <li>
                            <button onClick={logoutHandler}>Logout</button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;
