import React from "react";

function Paragraph(props) {
    console.log("Paragraph Running !!!");

    return <p>{props.children}</p>;
}

export default Paragraph;
