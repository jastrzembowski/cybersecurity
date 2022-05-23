import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Nav from "./components/Nav";
import Consultant from "./components/Consultant";
import Cyber from "./components/Cyber";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/consultant" element={<Consultant />} />
      <Route path="/cyberversicherung" element={<Cyber/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
