import React from "react";

function Declarative() {
    // useState To Work //

    // const [isDone, setIsDone] = useState(false);

    let isDone = false;

    function strike() {
        // setIsDone(true);
        isDone = true;
    }

    function unstrike() {
        // setIsDone(false);
        isDone = false;
    }

    return (
        <div>
            <p style={isDone ? { textDecoration: "line-through" } : null}>
                Declarative Programming
            </p>
            <button onClick={strike}>Strike</button>
            <button onClick={unstrike}>Unstrike</button>
        </div>
    );
}

export default Declarative;
