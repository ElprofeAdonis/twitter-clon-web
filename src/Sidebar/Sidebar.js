import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

import axios from "axios";
import { Avatar } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import { Button } from "@mui/material";

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

const Sidebar = () => {
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />

      {/* Button -> Tweet */}
      <Button
        onClick={handleOpen}
        variant="outlined"
        className="sidebar__tweet"
        fullWidth
      >
        Tweet
      </Button>

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
                onChange={(evento) => setComentarios(evento.target.value)}
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
        </Box>
      </Modal>
    </div>
  );
};

export default Sidebar;
