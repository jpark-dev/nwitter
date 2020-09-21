import React, { useState } from "react";
import AppRouter from "./Router";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; Nwsitter {new Date().getFullYear()}</footer>
    </>
  );
}
