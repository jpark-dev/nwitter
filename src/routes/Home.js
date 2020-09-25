import React, { useEffect, useState } from "react";
import { dbService } from "myFirebase";
import Nweet from "components/Nweet";

const Home = ({ userObj }) => {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);
  const [attachment, setAttachment] = useState();
  // mapping through dbService.collection would not re-render
  // const getNweets = async () => {
  //   const dbNweets = await dbService.collection("nweets").get();
  //   dbNweets.forEach(doc => {
  //     const nweetObj = {
  //       ...doc.data(),
  //       id: doc.id,
  //     };
  //     setNweets(prev => [nweetObj, ...prev]);
  //   });
  // };

  useEffect(() => {
    // getNweets();
    dbService.collection("nweets").onSnapshot(snapshot => {
      const nweetArr = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArr);
    });
  }, []);
  const onSubmit = async e => {
    e.preventDefault();
    // await dbService.collection("nweets").add({
    //   text: nweet,
    //   createdAt: Date.now(),
    //   creatorId: userObj.uid,
    // });
    setNweet("");
  };
  const onChange = e => {
    const {
      target: { value },
    } = e;
    setNweet(value);
  };
  const onFileChange = e => {
    const {
      target: { files },
    } = e;
    const selectedFile = files[0];
    const reader = new FileReader();
    reader.onloadend = finishedEvent => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(selectedFile);
  };
  const onClearAttachment = () => {
    setAttachment(null);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          placeholder="What's on your mind?"
          maxLength={120}
          value={nweet}
        />
        <input type="file" accept="image/*" onChange={onFileChange} />
        <input type="submit" value="Nweet" />
        {attachment && (
          <div>
            <img src={attachment} width="50px" height="50px" />
            <button onClick={onClearAttachment}>Clear</button>
          </div>
        )}
      </form>
      <div>
        {nweets.map(nweet => (
          <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
