import React, { useState } from "react";

import Output from "../Output/Output";

function Greeting() {
    const [changeText, setChangeText] = useState(false);

    function changeTextHandler() {
        setChangeText((prevState) => !prevState);
    }

    return (
        <div>
            <h1>Hello, React!</h1>
            {!changeText && <Output>Yo, Good To See You!</Output>}
            {changeText && <Output>Keep Smiling :)</Output>}
            <button onClick={changeTextHandler}>Change Text</button>
        </div>
    );
}

export default Greeting;
