import React from "react";
import { Avatar, Button } from "@mui/material";
import "./TweetBox.css";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar
            style={{ margin: "8px" }}
            src="https://randomuser.me/api/portraits/women/21.jpg"
          />
          <input
            style={{
              backgroundColor: "#000000",
              border: "none",
              marginLeft: "70px",
              fontSize: "20px",
              flex: 1,
              color: "#d6d9db",
              margin: "8px",
            }}
            placeholder="What's happening?"
          />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
        />
        <Button onClick={alert} type="submit" className="tweetBox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
