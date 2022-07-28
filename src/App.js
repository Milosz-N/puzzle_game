import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Game from "./components/Game";
import "./scss/main.scss";
import Home from "./components/Home";
import Board from "./components/Board";

// import {a} from "../src/images"
function App() {
  return (
    
    <div className="container">
      <Home />
      {/* <Board /> */}
    </div>

  );
}

export default App;
