import React, { useMemo } from "react";

import classes from "./List.module.css";

function List(props) {
    const { items } = props;

    const sortedList = useMemo(() => {
        console.log("Items Sorted");
        return items.sort((a, b) => a - b);
    }, [items]);

    console.log("List Running !!!");

    return (
        <div className={classes.list}>
            <h2>{props.title}</h2>
            <ul>
                {sortedList.map((item) => {
                    return <li key={item}>{item}</li>;
                })}
            </ul>
        </div>
    );
}

export default React.memo(List);
