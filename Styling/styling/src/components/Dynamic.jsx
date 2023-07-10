import React, { useState } from "react";

import "./Dynamic.css";

function Dynamic() {
    const [color, setColor] = useState(false);

    function colorChangeHandler(e) {
        e.preventDefault();
        setColor((prevColor) => !prevColor);
    }

    return (
        <form onSubmit={colorChangeHandler}>
            <h1 className={`heading__light ${color ? "coral" : "mint"}`}>
                Dyanmically Changing Styles
            </h1>
            <button className="dy_button" type="submit">
                Change Color
            </button>
        </form>
    );
}

export default Dynamic;
