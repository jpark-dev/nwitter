import React from "react";

const Home = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {};
  return (
    <div>
      <form onSumbit={onSubmit}>
        <input type="text" placeholder="What's on your mind?" maxLength={120} />
        <input type="submit" value="Nweet" />
      </form>
    </div>
  );
};
export default Home;
