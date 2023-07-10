import React from "react";

import classes from "./Home.module.css";

import Card from "../Card/Card";

function Home() {
    return (
        <Card className={classes.home}>
            <h1>Welcome Back !!!</h1>
        </Card>
    );
}

export default Home;
