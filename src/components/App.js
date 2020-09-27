import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "myFirebase";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: args => user.updateProfile(args),
        });
      }
      setIsLoaded(true);
    });
  }, []);
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: args => user.updateProfile(args),
    });
  };
  return (
    <>
      {isLoaded ? (
        <AppRouter
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
          refreshUser={refreshUser}
        />
      ) : (
        "Loading..."
      )}

      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </>
  );
}
