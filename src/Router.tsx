import React from "react";
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Home, List } from "./components/pages";
import { auth } from "./firebaseconfig";
import { Button } from "@material-ui/core";
import { Lock } from "@material-ui/icons";

const AppRouter = () => {
    const history = createBrowserHistory();
    return (
        <Router history={history}>
            <Navigation />
            <Route path="/" exact component={Home} />
            <Route path="/list" component={List} />
        </Router>
    );
};

export { AppRouter };

const Navigation = () => {
    return (
        <div className="navbar" id="navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/list">List Developers</Link>
                </li>

                <span className="user-text"><span className="bolded spaceafter">{auth.currentUser && auth.currentUser.email}</span>is logged in.</span>
                <span className="sign-out-button"><Button variant="contained" onClick={() => auth.signOut()}><Lock /></Button></span>
            </ul>
        </div>
    );
};
