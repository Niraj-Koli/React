import React, { useEffect, useState, useReducer } from "react";

import classes from "./Login.module.css";

import Card from "../Card/Card";
import Button from "../Button/Button";

function emailReducer(prevState, action) {
    if (action.type === "USER_INPUT") {
        return { value: action.val, isValid: action.val.includes("@") };
    }

    if (action.type === "INPUT_BLUR") {
        return {
            value: prevState.value,
            isValid: prevState.value.includes("@"),
        };
    }

    return { value: "", isValid: false };
}

function passwordReducer(prevState, action) {
    if (action.type === "USER_INPUT") {
        return { value: action.val, isValid: action.val.trim().length > 6 };
    }

    if (action.type === "INPUT_BLUR") {
        return {
            value: prevState.value,
            isValid: prevState.value.trim().length > 6,
        };
    }

    return { value: "", isValid: false };
}

function Login(props) {
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: null,
    });

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: "",
        isValid: null,
    });

    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log("Checking Form Validity!");
            setFormIsValid(emailIsValid && passwordIsValid);
        }, 500);

        return () => {
            console.log("CLEANUP");
            clearTimeout(identifier);
        };
    }, [emailIsValid, passwordIsValid]);

    function emailChangeHandler(event) {
        dispatchEmail({ type: "USER_INPUT", val: event.target.value });

        setFormIsValid(
            event.target.value.includes("@") && passwordState.isValid
        );
    }

    function passwordChangeHandler(event) {
        dispatchPassword({ type: "USER_INPUT", val: event.target.value });

        setFormIsValid(
            emailState.isValid && event.target.value.trim().length > 6
        );
    }

    function validateEmailHandler() {
        dispatchEmail({ type: "INPUT_BLUR" });
    }

    function validatePasswordHandler() {
        dispatchPassword({ type: "INPUT_BLUR" });
    }

    function submitHandler(event) {
        event.preventDefault();
        props.onLogin(emailState.value, passwordState.value);
    }

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${
                        emailState.isValid === false ? classes.invalid : ""
                    }`}>
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${
                        passwordState.isValid === false ? classes.invalid : ""
                    }`}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button
                        type="submit"
                        className={classes.btn}
                        disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
}

export default Login;
