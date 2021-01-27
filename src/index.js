import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";

// 아래 코드는 react를 html과 연결해주는 역할만 하는 javascript.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
