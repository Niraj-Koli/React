import React from "react";

function Inline() {
    const customCSS = {
        color: "navy",
        fontSize: "50px",
        border: "1px solid black",
    };

    const changeCSS = {
        color: "purple",
        backgroundColor: "orange",
    };

    changeCSS.backgroundColor = "yellow";

    return (
        <div>
            <h1 style={{ color: "red" }}>Inline CSS</h1>
            <h1 style={customCSS}>Custom Object CSS</h1>
            <h1 style={changeCSS}>Change CSS</h1>
        </div>
    );
}

export default Inline;
