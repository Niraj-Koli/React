import React from "react";

function Greeting() {
    let greet = "";

    let dateStyle = {
        color: "",
    };

    const hour = new Date().getHours();

    if (hour < 12) {
        greet = "Good, Morning !!!";
        dateStyle.color = "red";
    } else if (hour < 18) {
        greet = "Good, Afternoon !!!";
        dateStyle.color = "green";
    } else {
        greet = "Good, Night !!!";
        dateStyle.color = "blue";
    }

    return (
        <h1 style={dateStyle} className="greeting">
            {greet}
        </h1>
    );
}

export default Greeting;
