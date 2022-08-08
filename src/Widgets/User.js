import React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
const User = ({ infoApi }) => {
  return (
    <>
      {infoApi.map((el) => (
        <div key={el.id}>
          <Card sx={{ maxWidth: 625, minWidth: 250, border: 8 }}>
            <CardMedia
              component="img"
              height="140"
              image={el.foto}
              alt={el.foto}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {el.nombre} {el.apellido}
              </Typography>
            </CardContent>
            <div className="user-details">
              <div>
                <strong>Email:</strong> {el.email}
              </div>
              <Button variant="contained" endIcon={<SendIcon />}>
                Follows
              </Button>
            </div>
          </Card>
          <br />
        </div>
      ))}
    </>
  );
};

export default User;
