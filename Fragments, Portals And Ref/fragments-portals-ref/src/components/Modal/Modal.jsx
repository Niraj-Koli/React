import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

import Card from "../Card/Card";
import Button from "../Button/Button";

function Backdrop(props) {
    return <div className={classes.backdrop} onClick={props.onConfirm} />;
}

function Overlay(props) {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    );
}

function Modal(props) {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById("backdrop-root")
            )}
            {ReactDOM.createPortal(
                <Overlay
                    title={props.title}
                    message={props.message}
                    onConfirm={props.onConfirm}
                />,
                document.getElementById("overlay-root")
            )}
        </React.Fragment>
    );
}

export default Modal;
