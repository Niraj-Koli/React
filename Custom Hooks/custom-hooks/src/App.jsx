import React, { Fragment } from "react";

import Forward from "./components/Counter/Forward";
import Backward from "./components/Counter/Backward";

function App() {
    return (
        <Fragment>
            <Forward />
            <Backward />
        </Fragment>
    );
}

export default App;
