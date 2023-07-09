import React from "react";

function strike() {
    document.getElementById("imperative").style.textDecoration = "line-through";
}

function unstrike() {
    document.getElementById("imperative").style.textDecoration = null;
}

function Imperative() {
    return (
        <div>
            <p>Imperative Programming</p>
            <button onClick={strike}>Strike</button>
            <button onClick={unstrike}>Unstrike</button>
        </div>
    );
}

export default Imperative;
