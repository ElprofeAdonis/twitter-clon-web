import React, { useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import axios from "axios";

const ComentariosTweet = () => {
  // const [comentarioTweet, setComentarioTweet] = React.useState(null);
  // const [comentsApi, setComentsApi] = React.useState([]);

  // const [comentarioo, setComentario] = React.useState("");
  // const [fotoo, setFotoo] = React.useState("");
  // const [tweetId, setTweetId] = React.useState("");
  // const [usuarioId, setUsuarioId] = React.useState("");

  // const fetchPostTweet = async () => {
  //   try {
  //     const res = await axios.post("http://localhost:8000/crear_comentario");

  //     const data = await res.json();
  //     setComentarioTweet(data.data);
  //     setComentsApi(data);
  //     console.log(data);
  //   } catch (error) {
  //     console.log("Hola creo que funciono" + error);
  //   } finally {
  //     console.log("Peticion finalizada del Post tweet");
  //   }
  // };
  // useEffect(() => {
  //   console.log("Peticion inicializada");
  //   fetchPostTweet();
  // }, []);

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src="https://randomuser.me/api/portraits/men/33.jpg"
          />
        </ListItemAvatar>
        <ListItemText
          primary="username"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                this is comments
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};

export default ComentariosTweet;
