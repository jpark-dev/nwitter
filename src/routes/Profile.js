import { authService } from "myFirebase";
import React from "react";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();
  const onClick = () => {
    authService.signOut();
    history.push("/");
  };
  return (
    <>
      <button onClick={onClick}>Log Out</button>
    </>
  );
};
