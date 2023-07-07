import React, { useRef, useContext } from "react";

import { useNavigate } from "react-router-dom";

import classes from "./ProfileForm.module.css";

import AuthContext from "../../context/AuthContext";

function ProfileForm() {
    const navigate = useNavigate();

    const newPasswordInputRef = useRef();

    const authCtx = useContext(AuthContext);

    function submitHandler(event) {
        event.preventDefault();

        const enteredNewPassword = newPasswordInputRef.current.value;

        fetch(
            "", // Reset Password API Endpoint //
            {
                method: "POST",
                body: JSON.stringify({
                    idToken: authCtx.token,
                    password: enteredNewPassword,
                    returnSecureToken: false,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then((res) => {
            navigate("/", { replace: true });
        });
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="new-password">New Password</label>
                <input
                    ref={newPasswordInputRef}
                    minLength="7"
                    type="password"
                    id="new-password"
                />
            </div>
            <div className={classes.action}>
                <button>Change Password</button>
            </div>
        </form>
    );
}

export default ProfileForm;
