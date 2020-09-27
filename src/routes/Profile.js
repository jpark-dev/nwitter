import { authService, dbService } from "myFirebase";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default ({ userObj }) => {
  const history = useHistory();
  const onClick = () => {
    authService.signOut();
    history.push("/");
  };
  const getMyNweets = async () => {
    const nweets = await dbService
      .collection("nweets")
      .where("creatorId", "==", userObj.uid)
      .orderBy("createdAt")
      .get();

    console.log(nweets.docs.map(doc => doc.data()));
  };
  useEffect(() => {
    getMyNweets();
  }, []);

  return (
    <>
      <button onClick={onClick}>Log Out</button>
    </>
  );
};
