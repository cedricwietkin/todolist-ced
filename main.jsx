import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App.jsx";
import "./src/css/index.css";
import Social from "./src/components/Social.jsx";
import './src/css/style.css';
import Calendar from "react-calendar";
import { Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  
  <App/>

    <Calendar />
  </React.StrictMode>
);
