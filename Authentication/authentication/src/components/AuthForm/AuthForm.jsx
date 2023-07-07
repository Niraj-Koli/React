import React, { useState, useRef, useContext } from "react";

import { useNavigate } from "react-router-dom";

import classes from "./AuthForm.module.css";

import AuthContext from "../../context/AuthContext";

function AuthForm() {
    const navigate = useNavigate();

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext(AuthContext);

    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    function switchAuthModeHandler() {
        setIsLogin((prevState) => !prevState);
    }

    function submitHandler(event) {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        setIsLoading(true);

        let url;

        if (isLogin) {
            url = ""; // Login API Endpoint //
        } else {
            url = ""; // Sign Up API Endpoint //
        }

        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                setIsLoading(false);
                if (res.ok) {
                    return res.json();
                } else {
                    return res.json().then((data) => {
                        let errorMessage = "Authentication Failed !!!";
                        if (data && data.error && data.error.message) {
                            errorMessage = data.error.message;
                        }

                        throw new Error(errorMessage);
                    });
                }
            })
            .then((data) => {
                const expirationTime = new Date(
                    new Date().getTime() + +data.expiresIn * 1000
                );

                authCtx.login(data.idToken, expirationTime.toISOString());
                navigate("/", { replace: true });
            })
            .catch((err) => {
                alert(err.message);
            });
    }

    return (
        <section className={classes.auth}>
            <h1>{isLogin ? "Login" : "Sign Up"}</h1>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="email">Your Email</label>
                    <input
                        ref={emailInputRef}
                        type="email"
                        id="email"
                        required
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="password">Your Password</label>
                    <input
                        ref={passwordInputRef}
                        type="password"
                        id="password"
                        required
                    />
                </div>
                <div className={classes.actions}>
                    {!isLoading && (
                        <button>{isLogin ? "Login" : "Create Account"}</button>
                    )}
                    {isLoading && <p>Sending Request...</p>}
                    <button
                        type="button"
                        className={classes.toggle}
                        onClick={switchAuthModeHandler}>
                        {isLogin
                            ? "Create New Account"
                            : "Login With Existing Account"}
                    </button>
                </div>
            </form>
        </section>
    );
}

export default AuthForm;
