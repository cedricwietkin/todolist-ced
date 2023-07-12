import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App.jsx";
import "./src/css/index.css";
import Social from "./src/components/Social.jsx";
import './src/css/style.css';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { Route } from "react-router-dom";
import TodoList from "./src/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  
  <App/>

    <Calendar />
  </React.StrictMode>
);
