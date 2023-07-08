import React from "react";

import useCounter from "../../hooks/useCounter";

import Card from "../Card/Card";

function Forward() {
    const counter = useCounter(false);

    return <Card>{counter}</Card>;
}

export default Forward;
