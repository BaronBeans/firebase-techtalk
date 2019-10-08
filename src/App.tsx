import { Button } from "@material-ui/core";
import { Lock } from "@material-ui/icons";
import React from "react";
import "./App.css";
import { Loading, Login } from "./components";
import { auth } from "./firebaseconfig";

const App = () => {
  const [user, setUser] = React.useState<any>(auth.currentUser);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      setLoading(true);
      if (user) {
        setUser({ user });
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    })
  }, []);

  if (loading) {
    return (
      <Loading />
    );
  }

  if (user) {
    const email = auth.currentUser && auth.currentUser.email;
    return (
      <div className="App">
        <h3>User ({email}) logged in.</h3>
        <Button variant="contained" onClick={() => auth.signOut()}><Lock /></Button>
      </div>
    )
  }

  return (
    <Login />
  );
}

export { App };
