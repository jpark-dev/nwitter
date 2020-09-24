import { dbService } from "myFirebase";
import React from "react";

const Nweet = ({ nweetObj, isOwner }) => {
  const onDeleteClick = () => {
    const proceedDelete = window.confirm("Delete this nweet?");

    if (proceedDelete) {
      dbService.doc(`nweets/${nweetObj.id}`).delete();
    }
  };

  return (
    <div>
      <h4>{nweetObj.text}</h4>
      {isOwner && (
        <>
          <button onClick={onDeleteClick}>Delete</button>
          <button>Edit</button>
        </>
      )}
    </div>
  );
};
export default Nweet;
