import React, { useState } from "react";
import { dbService } from "myFirebase";

const Home = () => {
  const [nweet, setNweet] = useState("");
  const onSubmit = async (e) => {
    console.log("submit!!", nweet);
    e.preventDefault();
    await dbService.collection("nweets").add({
      nweet,
      createdAt: Date.now(),
    });
    setNweet("");
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNweet(value);
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
        <input type="submit" value="Nweet" />
      </form>
    </div>
  );
};
export default Home;
