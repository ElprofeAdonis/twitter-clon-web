import React, { useEffect } from "react";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import { Avatar, Button, TextField } from "@mui/material";
import ComentariosTweet from "./ComentariosTweet";
import "./Comment.css";
import ConteoComentario from "./ConteoComentario";
import CorazonMegustas from "./CorazonMegustas";
import Etiquetas from "./Etiquetas";

import SendIcon from "@mui/icons-material/Send";

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
                  {el.autorId}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{el.comentario}</p>
            </div>
          </div>
          <img src={el.foto} alt={el.foto} />

          {/* son los botones */}

          <div className="post__footer">
            <Button>
              <ChatBubbleOutlineIcon fontSize="small" />
            </Button>
            <ConteoComentario />

            <RepeatIcon fontSize="small" />
            <Etiquetas />
            <FavoriteBorderIcon fontSize="small" />
            <CorazonMegustas />
            <PublishIcon fontSize="small" />
          </div>
          <div className="Comentarios">
            <ComentariosTweet />
            <ComentariosTweet />
            <ComentariosTweet />
            <ComentariosTweet />
          </div>
          <font className="post_form">
            <TextField
              label="add comment"
              seze="small"
              variant="outlined"
              className="post_input"
              placeholder="add comment"
            />
          </font>
          <Button variant="containet" size="small" endIcon={<SendIcon />}>
            {" "}
            Send
          </Button>
        </div>
      ))}
    </>
  );
};

export default PostTweeter;
