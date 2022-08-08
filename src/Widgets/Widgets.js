import React, { useEffect } from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import axios from "axios";
import { Avatar } from "@mui/material";
import MostrarUsuarios from "./MostrarUsuarios";

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

const Widgets = () => {
  const [postwitter, setPostwitter] = React.useState(null);
  const [infoApi, setInfoApi] = React.useState([]);

  const [mostrarUsuario, setMostrarUsuario] = React.useState(null);
  const [usuApi, setUsuApi] = React.useState([]);

  const [email, setEmail] = React.useState("");
  const [nombre, setNombre] = React.useState("");
  const [apellido, setApellido] = React.useState("");
  const [edad, setEdad] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [foto, setFoto] = React.useState("");
  // crea los usuarios
  const fetchPostTweet = async () => {
    try {
      const res = await axios.post("http://localhost:8000/crear_usuario", {
        email: email,
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        password: password,
        foto: foto,
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <div>
          <div>
            <Button style={{ float: "right", alignItems: "center" }}>
              Login
            </Button>
          </div>

          {/* Crear usuarios  aca empieza*/}
          <div className="app_siginForm">
            <Button
              onClick={handleOpen}
              style={{ float: "left", alignItems: "center" }}
            >
              Sign Up
            </Button>
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 400 }}>
            <h2 id="parent-modal-title">Crear Usuarios</h2>
            <form>
              <div className="tweetBox_input">
                <Avatar
                  style={{ margin: "8px" }}
                  src="https://randomuser.me/api/portraits/women/21.jpg"
                />

                <input
                  type="text"
                  onChange={(evento) => setEmail(evento.target.value)}
                  style={{
                    backgroundColor: "#000000",
                    border: "none",
                    marginLeft: "70px",
                    fontSize: "20px",
                    flex: 1,
                    color: "#d6d9db",
                    margin: "8px",
                  }}
                  placeholder="Please Email"
                />
                <input
                  type="text"
                  onChange={(evento) => setNombre(evento.target.value)}
                  style={{
                    backgroundColor: "#000000",
                    border: "none",
                    marginLeft: "70px",
                    fontSize: "20px",
                    flex: 1,
                    color: "#d6d9db",
                    margin: "8px",
                  }}
                  placeholder="User Name"
                />
                <input
                  type="text"
                  onChange={(evento) => setApellido(evento.target.value)}
                  style={{
                    backgroundColor: "#000000",
                    border: "none",
                    marginLeft: "70px",
                    fontSize: "20px",
                    flex: 1,
                    color: "#d6d9db",
                    margin: "8px",
                  }}
                  placeholder="User's last name"
                />
                <input
                  type="text"
                  onChange={(evento) => setEdad(evento.target.value)}
                  style={{
                    backgroundColor: "#000000",
                    border: "none",
                    marginLeft: "70px",
                    fontSize: "20px",
                    flex: 1,
                    color: "#d6d9db",
                    margin: "8px",
                  }}
                  placeholder="User age"
                />
                <input
                  type="text"
                  onChange={(evento) => setPassword(evento.target.value)}
                  style={{
                    backgroundColor: "#000000",
                    border: "none",
                    marginLeft: "70px",
                    fontSize: "20px",
                    flex: 1,
                    color: "#d6d9db",
                    margin: "8px",
                  }}
                  placeholder="Password"
                />
              </div>
              <input
                type="text"
                onChange={(evento) => setFoto(evento.target.value)}
                className="tweetBox__imageInput"
                placeholder="Optional: Enter image URL"
              />
              <br />
              <Button
                variant="contained"
                disableElevation
                onClick={fetchPostTweet}
                type="submit"
              >
                Create user
              </Button>
            </form>
          </Box>
        </Modal>

        {/* Termina lo de Sign Up */}

        <di>
          {" "}
          <MostrarUsuarios />
        </di>

        <TwitterTweetEmbed tweetId={"1547348604125331456"} />
        <TwitterTweetEmbed tweetId={"1547079301429956608"} />
        <TwitterTweetEmbed tweetId={"1547004048209051649"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="ado_aleman"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
