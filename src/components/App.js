import React, { useState } from "react";
import AppRouter from "components/Router";
import firebase from "myFirebase";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; Nwsitter {new Date().getFullYear()}</footer>
    </>
  );
}
