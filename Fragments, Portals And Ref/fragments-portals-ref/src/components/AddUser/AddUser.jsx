import React, { useState, useRef } from "react";

import classes from "./AddUser.module.css";

import Card from "../Card/Card";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

function AddUser(props) {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        // console.log(nameInputRef, ageInputRef);

        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message:
                    "Please Enter A Valid Name And Age (Non-Empty Values).",
            });
            return;
        }

        if (+enteredAge < 1) {
            setError({
                title: "Invalid Age",
                message: "Please Enter A Valid Age (> 0).",
            });
            return;
        }

        props.onAddUser(enteredName, enteredAge);

        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
    };

    function errorHandler() {
        setError(null);
    }

    return (
        <div>
            {error && (
                <Modal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" ref={nameInputRef} />
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" ref={ageInputRef} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
}

export default AddUser;
