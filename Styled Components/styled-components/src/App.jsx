import React from "react";

import styled from "styled-components";

const Button = styled.button`
    background-color: #ff7f50;
    border: none;
    color: white;
    padding: 7px 17px;
    border-radius: 5px;
    font-family: cursive;
    font-size: 20px;
    margin: 4px 2px;
    cursor: pointer;

    @media (max-width: 700px) {
        background-color: magenta;
    }

    @media (min-width: 700px) and (max-width: 1200px) {
        background-color: #4b0082;
    }

    &:hover {
        background-color: white;
        color: black;
    }
`;

const H1 = styled.h1`
    color: #00203f;
`;

const Div = styled.div`
    text-align: center;
`;

const P = styled.p`
    color: #00203f;

    & span {
        font-weight: bold;
    }
`;

function App() {
    return (
        <Div>
            <H1>Styled Components</H1>
            <P>
                Styled Components is a library that allows you to write{" "}
                <span>CSS</span> in your JavaScript.
            </P>
            <Button>Click Me</Button>
        </Div>
    );
}

export default App;
