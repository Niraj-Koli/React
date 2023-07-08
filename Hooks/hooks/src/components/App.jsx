import React, { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    console.log([count, setCount]);
    console.log(count);
    console.log(setCount);

    function addition() {
        setCount(count + 1);
    }

    function subtraction() {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={addition}> + </button>
            <button onClick={subtraction}> - </button>
        </div>
    );
}

export default App;
