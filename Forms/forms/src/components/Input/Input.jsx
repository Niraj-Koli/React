import React from "react";

import useInput from "../../hooks/useInput";

function Input() {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameIsInvalid,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = useInput((value) => value.trim() !== "");

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailIsInvalid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput((value) => value.includes("@"));

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    function formSubmissionHandler(event) {
        event.preventDefault();

        if (!formIsValid) {
            return;
        }

        console.log(enteredName, enteredEmail);

        resetNameInput();
        resetEmailInput();
    }

    const nameInputClasses = nameIsInvalid
        ? "form-control invalid"
        : "form-control";

    const emailInputClasses = emailIsInvalid
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                    value={enteredName}
                />
                {nameIsInvalid && (
                    <p className="error-text">Name Must Not Be Empty.</p>
                )}
            </div>

            <div className={emailInputClasses}>
                <label htmlFor="email">Your E-mail</label>
                <input
                    type="email"
                    id="email"
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                />
                {emailIsInvalid && (
                    <p className="error-text">Please Enter A Valid Email.</p>
                )}
            </div>

            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
}

export default Input;
