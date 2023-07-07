import React, { Fragment } from "react";

import Login from "./Login";
import Header from "./Header";

const isLoggedIn = false;

const currentTime = new Date().getHours();

function App() {
    return (
        <Fragment>
            {/* And Operatior (&&) In React Condition && Expression */}
            <div className="container">
                {currentTime > 12 && <h1>Time = {currentTime}</h1>}
            </div>
            {/* Ternary Operator (? :) Expression ? Expression : Expression */}
            <div className="container">
                {isLoggedIn ? <Header /> : <Login />}
            </div>
        </Fragment>
    );
}

export default App;
