import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "myFirebase";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setIsLoaded(true);
    });
  }, []);
  return (
    <>
      {isLoaded ? (
        <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
      ) : (
        "Loading..."
      )}

      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </>
  );
}
