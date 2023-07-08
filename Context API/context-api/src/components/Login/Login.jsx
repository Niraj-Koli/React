import React, {
    useEffect,
    useState,
    useReducer,
    useContext,
    useRef,
} from "react";

import classes from "./Login.module.css";

import AuthContext from "../../context/AuthContext";

import Card from "../Card/Card";
import Button from "../Button/Button";
import Input from "../Input/Input";

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

function Login() {
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: null,
    });

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: "",
        isValid: null,
    });

    const ctx = useContext(AuthContext);

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

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

        if (formIsValid) {
            ctx.onLogin(emailState.value, passwordState.value);
        } else if (!emailIsValid) {
            emailInputRef.current.focus();
        } else {
            passwordInputRef.current.focus();
        }
    }

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input
                    ref={emailInputRef}
                    id="email"
                    label="E-Mail"
                    type="email"
                    isValid={emailIsValid}
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                />

                <Input
                    ref={passwordInputRef}
                    id="password"
                    label="Password"
                    type="password"
                    isValid={passwordIsValid}
                    value={passwordState.value}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                />

                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
}

export default Login;
