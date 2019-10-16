import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import fire from "../firebaseconfig";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onSubmitLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        fire.auth().signInWithEmailAndPassword(email, password).catch((err) => {
            setError(err.message);
            switch (err.code) {
                case "auth/user-not-found":
                case "auth/invalid-email":
                    setEmail('');
                    setError(`Incorrect email address, please try again.`);
                    break;
                case "auth/wrong-password":
                    setPassword('');
                    setError(`Wrong password, please try again.`);
                    break;
                case "auth/network-request-failed":
                    setPassword('');
                    setError(`You are offline, please try again later.`);
                    break;
                default:
                    break;
            }
        });
    }

    return (
        <>
            <h3>Please login to view this app.</h3>
            <div className="login-form">
                <div className="input-field">
                    <TextField type="email" placeholder="email address" value={email} onChange={(e) => setEmail(e.target.value)} autoFocus={true} />
                </div>
                <div className="input-field">
                    <TextField type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="input-field">
                    <Button variant="contained" onClick={onSubmitLogin} >Log in</Button>
                </div>
                <p className="error-label">{error}</p>
            </div>
        </>
    );
};

export { Login };