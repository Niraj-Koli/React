import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h1>Hello, React!</h1>);

// Traditional JavaScript Way //

// let h1 = document.createElement("h1");
// h1.innerHTML = "Hello, React!";
// document.getElementById("root").appendChild(h1);

const stem = ReactDOM.createRoot(document.getElementById("stem"));

// Traditional React Way //

// return React.createElement(
//     "div",
//     {},
//     React.createElement("h2", {}, "Hello, World!"),
//     React.createElement("p", {}, "This is Fun")
// );

stem.render(
    <div>
        <h2>Hello, World!</h2>
        <p>This is Fun</p>
    </div>
);

const fruit = ReactDOM.createRoot(document.getElementById("fruit"));
fruit.render(
    <div>
        <h1>My Buddies</h1>

        <ul>
            <li>Nero</li>
            <li>Vivy</li>
            <li>Dante</li>
        </ul>
    </div>
);

const fname = "Kaizer";
const lname = "Williams";
const number = 1007;

const leaf = ReactDOM.createRoot(document.getElementById("leaf"));
leaf.render(
    <div>
        <h1>Yo, {fname + " " + lname}!</h1>
        <h1>
            Yo, {fname} {lname}!
        </h1>
        <h1>Yo, {`${fname} ${lname}`}!</h1>
        <p>Your Favourite Number Is {number}</p>
        <p>Addition = {10 + 7}</p>
        <p>Subtraction = {10 - 7}</p>
        <p>Multiplication = {10 * 7}</p>
        <p>Division = {10 / 7}</p>
        <p>Modulo = {10 % 7}</p>
        <p>Power = {10 ** 7}</p>
        <p>Random = {Math.round(Math.random() * 100)}</p>
    </div>
);

const flower = ReactDOM.createRoot(document.getElementById("flower"));

const name = "Niraj Koli";
const currentYear = new Date();

flower.render(
    <div>
        <p>Created by {name}</p>
        <p>Copyright {currentYear.getFullYear()}</p>
    </div>
);
