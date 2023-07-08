import React from "react";

import classes from "./List.module.css";

import Card from "../Card/Card";

function List(props) {
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.age} Years Old)
                    </li>
                ))}
            </ul>
        </Card>
    );
}

export default List;
