import { Typography } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { font } from "./font.css";
import App from "./App";
import NavBar from "./components/NavBar";
import ThreadList from "./components/ThreadList";
import ThreadWrite from "./ThreadWrite";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Typography variant="h1" textAlign="center" fontFamily="KOTRAHOPE">
        GymLog
      </Typography>

      <NavBar />

      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/threads/:id" element={<App />} />
        <Route path="/threads" element={<ThreadList />} />
        <Route path="/threads/write" element={<ThreadWrite />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
