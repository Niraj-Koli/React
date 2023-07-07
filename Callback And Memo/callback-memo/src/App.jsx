import React, { useState, useCallback, useMemo } from "react";

import "./App.css";

import Button from "./components/Button/Button";
import List from "./components/List/List";
import Output from "./components/Output/Output";

function App() {
    const [showParagraph, setShowParagraph] = useState(false);

    const [allowToggle, setAllowToggle] = useState(false);

    const [listTitle, setListTitle] = useState("My List");

    console.log("App Running !!!");

    const toggleParagraphHandler = useCallback(() => {
        if (allowToggle) {
            setShowParagraph((prevShowParagraph) => !prevShowParagraph);
        }
    }, [allowToggle]);

    function allowToggleHandler() {
        setAllowToggle((prevAllowToggle) => !prevAllowToggle);
    }

    const changeTitleHandler = useCallback(() => {
        if (listTitle === "My List") {
            setListTitle("Your List");
        } else {
            setListTitle("My List");
        }
    }, [listTitle]);

    const listItems = useMemo(() => [10, 7, 93, 47, 21], []);

    return (
        <div>
            <div className="app">
                <h1>Yo There !!!</h1>
                <Output show={showParagraph} />

                <Button onClick={allowToggleHandler}>
                    {!allowToggle ? "Allow Toggling" : "Stop Toggling"}
                </Button>

                <Button onClick={toggleParagraphHandler}>
                    Toggle Paragraph
                </Button>
            </div>

            <div className="app">
                <List title={listTitle} items={listItems} />

                <Button onClick={changeTitleHandler}>Change List Title</Button>
            </div>
        </div>
    );
}

export default App;
