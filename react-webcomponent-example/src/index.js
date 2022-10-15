import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import element from '@hritik-chokker-webcomponent/element/elements';
const root = ReactDOM.createRoot(document.getElementById("root"));
const script = document.createElement("script");
script.src = element;
document.head.appendChild(script);
script.src = root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
