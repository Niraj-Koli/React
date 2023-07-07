import React, { useState } from "react";

import { Transition } from "react-transition-group";

import "./App.css";

import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

function App() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [showBlock, setShowBlock] = useState(false);

    function showModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <div className="App">
            <h1>React Animations</h1>
            <button
                className="Button"
                onClick={() => setShowBlock((prevState) => !prevState)}>
                Toggle
            </button>

            <br />

            <Transition
                in={showBlock}
                timeout={1000}
                mountOnEnter
                unmountOnExit
                onEnter={() => console.log("onEnter")}
                onEntering={() => console.log("onEntering")}
                onEntered={() => console.log("onEntered")}
                onExit={() => console.log("onExit")}
                onExiting={() => console.log("onExiting")}
                onExited={() => console.log("onExited")}>
                {/* {(state) => <p>{state}</p>} */}

                {(state) => (
                    <div
                        style={{
                            backgroundColor: "#0b0bff",
                            width: 150,
                            height: 150,
                            margin: "auto",
                            transition: "opacity 1s ease-out",
                            opacity: state === "exiting" ? 0 : 1,
                        }}
                    />
                )}
            </Transition>

            <Modal show={modalIsOpen} closed={closeModal} />

            {modalIsOpen ? <Backdrop show={modalIsOpen} /> : null}

            <button className="Button" onClick={showModal}>
                Open Modal
            </button>

            <h3>Animating Lists</h3>

            <List />
        </div>
    );
}

export default App;
