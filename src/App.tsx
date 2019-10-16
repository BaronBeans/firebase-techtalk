import React from "react";
import "./App.css";
import { Loading, Login } from "./components";
import { auth } from "./firebaseconfig";
import { AppRouter } from "./Router";

const App = () => {
  const [user, setUser] = React.useState<any>(auth.currentUser);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    auth.onAuthStateChanged(async (user2) => {
      if (user2) {
        setUser(user2);
      } else {
        setUser(null);
      }
      setLoading(false);

    })
  }, []);

  if (loading) {
    return (
      <Loading />
    );
  }

  if (user) {
    return <AppRouter />
  }

  return (
    <Login />
  );
}

export { App };

