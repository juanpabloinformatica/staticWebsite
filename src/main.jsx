import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App'
import MyApp from "./myApp";
import Fetching from "./fetching";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Fetching />
    <MyApp />
  </React.StrictMode>
);
