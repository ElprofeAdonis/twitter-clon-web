import React, { useEffect } from "react";
import { Avatar, Button } from "@mui/material";
import "./TweetBox.css";
import axios from "axios";

const TweetBox = () => {
  const [postwitter, setPostwitter] = React.useState(null);
  const [infoApi, setInfoApi] = React.useState([]);
  const [comentetario, setComentarios] = React.useState("");
  const [fot, setFoto] = React.useState("");

  const fetchPostTweet = async () => {
    try {
      const res = await axios.post("http://localhost:8000/crear_tweet", {
        comentario: comentetario,
        foto: fot,
        autorId: 2,
      });

      const data = await res.json();
      setPostwitter(data.data);
      setInfoApi(data);
    } catch (error) {
      console.log("Hola creo que funciono" + error);
    } finally {
      console.log("Peticion finalizada del Post tweet");
    }
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar
            style={{ margin: "8px" }}
            src="https://randomuser.me/api/portraits/women/21.jpg"
          />
          <input
            type="text"
            onChange={(evento) => setComentarios(evento.target.value)}
            style={{
              backgroundColor: "#000000",
              border: "none",
              marginLeft: "55px",
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
          onChange={(evento) => setFoto(evento.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
        />
        <Button
          onClick={fetchPostTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
