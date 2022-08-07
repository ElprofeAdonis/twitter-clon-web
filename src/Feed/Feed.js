import React from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";

const Feed = () => {
  return (
    <div className="feed">
      {/*header*/}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/*Tweetbot*/}
      <TweetBox />
      {/*Post*/}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
