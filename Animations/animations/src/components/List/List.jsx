import React, { useState } from "react";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./List.css";

function List() {
    const [items, setItems] = useState([1, 2, 3]);

    function addItemHandler() {
        setItems((prevItems) => prevItems.concat(prevItems.length + 1));
    }

    function removeItemHandler(selIndex) {
        setItems((prevItems) =>
            prevItems.filter((item, index) => index !== selIndex)
        );
    }

    const listItems = items.map((item, index) => (
        <CSSTransition
            key={index}
            timeout={300}
            classNames="fade"
            mountOnEnter
            unmountOnExit>
            <li className="ListItem" onClick={() => removeItemHandler(index)}>
                {item}
            </li>
        </CSSTransition>
    ));

    return (
        <div>
            <button className="Button" onClick={addItemHandler}>
                Add Item
            </button>

            <p>Click Item To Remove.</p>

            <TransitionGroup component="ul" className="List">
                {listItems}
            </TransitionGroup>
        </div>
    );
}

export default List;
