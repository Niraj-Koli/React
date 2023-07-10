import React from "react";

import { useParams } from "react-router-dom";

function Details() {
    const params = useParams();

    return (
        <section>
            <h1>Details Page</h1>
            <p>{params.productId}</p>
        </section>
    );
}

export default Details;
