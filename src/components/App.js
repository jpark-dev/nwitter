import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "myFirebase";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setIsLoaded(true);
    });
  }, []);
  return (
    <>
      {isLoaded ? <AppRouter isLoggedIn={isLoggedIn} /> : "Loading..."}

      <footer>&copy; Nwsitter {new Date().getFullYear()}</footer>
    </>
  );
}
