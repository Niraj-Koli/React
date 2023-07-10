import React from "react";

import { Link } from "react-router-dom";

function Products() {
    return (
        <section className="products">
            <h1>Products Page</h1>
            <ul>
                <li>
                    <Link to="p1">A Computer</Link>
                </li>
                <li>
                    <Link to="p2">A Mobile</Link>
                </li>
                <li>
                    <Link to="p3">A Laptop</Link>
                </li>
            </ul>
        </section>
    );
}

export default Products;
