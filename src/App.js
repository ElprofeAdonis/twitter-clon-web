import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feed/Feed";
import Widgets from "./Widgets/Widgets";
import { AppBar } from "@mui/material";

import "./App.css";

function App() {
  return (
    <div className="app">
      <AppBar />
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
