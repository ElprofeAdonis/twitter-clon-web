import React, { useEffect } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import PostTweeter from "./PostTweeter";

const Post = () => {
  const [postwitter, setPostwitter] = React.useState(null);
  const [infoApi, setInfoApi] = React.useState([]);

  const fetchTweeter = async () => {
    try {
      const res = await fetch("http://localhost:8000/tweets/2");
      const data = await res.json();

      setPostwitter(data.data);
      setInfoApi(data);
    } catch (error) {
      console.log("Hola creo que funciono" + error);
    } finally {
      console.log("Peticion finalizada");
    }
  };

  useEffect(() => {
    console.log("Peticion inicializada");
    fetchTweeter(infoApi);
  }, []);
  return (
    <div className="post">
      <div className="post__body">
        <PostTweeter infoApi={infoApi} />
      </div>
    </div>
  );
};

export default Post;
