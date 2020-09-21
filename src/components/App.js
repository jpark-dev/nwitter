import React, { useState } from "react";
import AppRouter from "components/Router";
import { authService } from "myFirebase";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; Nwsitter {new Date().getFullYear()}</footer>
    </>
  );
}
