import React from "react";

import Paragraph from "../Paragraph/Paragraph";

function Output(props) {
    console.log("Output Running !!!");

    return <Paragraph>{props.show ? "This Is New !" : ""}</Paragraph>;
}

export default React.memo(Output);
