import React, { useEffect } from "react";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import { Avatar, Button } from "@mui/material";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 14,
  pt: 2,
  px: 4,
  pb: 3,
};

const PostTweeter = ({ infoApi }) => {
  const [comentarioTweet, setComentarioTweet] = React.useState(null);
  const [comentsApi, setComentsApi] = React.useState([]);

  const [comentarioo, setComentario] = React.useState("");
  const [fotoo, setFotoo] = React.useState("");
  const [tweetId, setTweetId] = React.useState("");
  const [usuarioId, setUsuarioId] = React.useState("");

  const fetchPostTweet = async () => {
    try {
      const res = await axios.post("http://localhost:8000/crear_comentario", {
        comentario: comentarioo,
        foto: fotoo,
        tweetId: tweetId,
        usuarioId: usuarioId,
      });

      const data = await res.json();
      setComentarioTweet(data.data);
      setComentsApi(data);
      console.log(data);
    } catch (error) {
      console.log("Hola creo que funciono" + error);
    } finally {
      console.log("Peticion finalizada del Post tweet");
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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

          {/* son los botones */}

          <div className="post__footer">
            <Button onClick={handleOpen}>
              <ChatBubbleOutlineIcon fontSize="small" />
            </Button>
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>

          {/* son los botones */}

          {/* este es el modal */}

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 400 }}>
              <h2 id="parent-modal-title">Post Tweets</h2>
              <form>
                <div className="tweetBox_input">
                  <Avatar
                    style={{ margin: "8px" }}
                    src="https://randomuser.me/api/portraits/women/21.jpg"
                  />
                  <input
                    type="text"
                    onChange={(evento) => setComentario(evento.target.value)}
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
                  type="text"
                  onChange={(evento) => setFotoo(evento.target.value)}
                  className="tweetBox__imageInput"
                  placeholder="Optional: Enter image URL"
                />
                <input
                  type="number"
                  onChange={(evento) => setTweetId(evento.target.value)}
                  className="tweetBox__imageInput"
                  placeholder="TweetId"
                />

                <input
                  type="number"
                  onChange={(evento) => setUsuarioId(evento.target.value)}
                  className="tweetBox__imageInput"
                  placeholder="usuarioId"
                />
                <Button
                  onClick={fetchPostTweet}
                  type="submit"
                  className="tweetBox__tweetButton"
                >
                  Comentario
                </Button>
              </form>
            </Box>
          </Modal>

          {/* este es el modal */}
        </div>
      ))}
    </>
  );
};

export default PostTweeter;
