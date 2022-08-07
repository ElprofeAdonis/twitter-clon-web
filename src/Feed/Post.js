import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://randomuser.me/api/portraits/women/21.jpg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Adonis Aleman
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" /> @ adoview
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>Hola Dios muchas gracias pro todo lo que haces conmigo</p>
          </div>
        </div>
        <img
          src="https://static.eldiario.es/clip/71d118ff-5ef2-449c-be8a-6c321304fa70_16-9-aspect-ratio_default_0.jpg"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
