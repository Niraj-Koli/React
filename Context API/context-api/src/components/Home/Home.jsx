import React, { useContext } from "react";

import classes from "./Home.module.css";

import AuthContext from "../../context/AuthContext";

import Card from "../Card/Card";
import Button from "../Button/Button";

function Home() {
    const ctx = useContext(AuthContext);

    return (
        <Card className={classes.home}>
            <h1>Welcome Back !!!</h1>
            <Button onClick={ctx.onLogout}>Logout</Button>
        </Card>
    );
}

export default Home;
