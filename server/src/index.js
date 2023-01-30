import { Typography } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { font } from "./font.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Typography variant="h1" textAlign="center" fontFamily="KOTRAHOPE">
      GymLog
    </Typography>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/threads/:id" element={<App />} />
        <Route path="/threads" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
