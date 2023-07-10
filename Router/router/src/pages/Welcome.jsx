import React from "react";

import { Outlet } from "react-router-dom";

function Welcome() {
    return (
        <section>
            <h1>Welcome Page</h1>

            <Outlet />
        </section>
    );
}

export default Welcome;
