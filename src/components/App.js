import React, { useState } from "react";
import AppRouter from "components/Router";
import { authService } from "myFirebase";

export default function App() {
  console.log(authService.currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; Nwsitter {new Date().getFullYear()}</footer>
    </>
  );
}
