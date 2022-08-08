import React, { useEffect } from "react";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import { Avatar, Button } from "@mui/material";

const PostTweeter = ({ infoApi }) => {
  return (
    <>
      {infoApi.map((el) => (
        <div key={el.id}>
          <div className="post__avatar">
            <Avatar src={el.foto} />
          </div>
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                Adonis Aleman
                <span className="post__headerSpecial">
                  <VerifiedUserIcon className="post__badge" /> @ autorId{" "}
                  {el.autoId}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{el.comentario}</p>
            </div>
          </div>
          <img src={el.foto} alt={el.foto} />
          <div className="post__footer">
            <Button>
              <ChatBubbleOutlineIcon fontSize="small" />
            </Button>
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      ))}
    </>
  );
};

export default PostTweeter;
