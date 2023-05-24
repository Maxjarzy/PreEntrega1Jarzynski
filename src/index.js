import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { initializeApp } from "firebase/app";
import App from "./App";

const firebaseConfig = {
  apiKey: "AIzaSyBf1GqdqxZxW47hDpF5aqOO50FX5vARcF4",
  authDomain: "homedecor-849ea.firebaseapp.com",
  projectId: "homedecor-849ea",
  storageBucket: "homedecor-849ea.appspot.com",
  messagingSenderId: "575614485859",
  appId: "1:575614485859:web:9dccacdf0c92bb36bf7f56",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
