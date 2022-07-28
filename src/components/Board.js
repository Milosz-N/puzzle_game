import React, { useState, useEffect } from "react";
// import Game from './components/Game';
import Game from "./Game";
import "../scss/main.scss";
// import {a} from "../src/images"
function Board({amount}) {
  let widthmax = 600;
  const [counter, setCounter] = useState(0);
//   const [amount, setAmoount] = useState("16");
  const [game, setGame] = useState([]);
  const [img, setImg] = useState("1");
  const [startgame, setstartgame] = useState(false);
  let arr = [];
  let arrpositionx = [];
  let arrpositiony = [];
  const handleClick = (event) => {
    if (arr.length < 1) {
      arr.push(event.currentTarget.id);
      arrpositionx.push(event.currentTarget.style.backgroundPositionX);
      arrpositiony.push(event.currentTarget.style.backgroundPositionY);
    } else {
      arr.push(event.currentTarget.id);
      arrpositionx.push(event.currentTarget.style.backgroundPositionX);
      arrpositiony.push(event.currentTarget.style.backgroundPositionY);
      changeid(arr, arrpositionx, arrpositiony);
      arr = [];
      arrpositionx = [];
      arrpositiony = [];
    }
  };
  function bgpositionx(x, y) {
    let b = Math.pow(y, 0.5); //pierwiastek z amount
    // console.log("jestem w funkcji")
    let w = 100 / (b - 1);
    let a;
    if (x % b == 0) {
      a = 0 + `%`;
    } else {
      a = Math.round(w * x) + `%`;
    }
    return a;
  }
  function bgpositiony(x, y) {
    let b = Math.pow(y, 0.5);
    let w = 100 / (b - 1);
    let a;
    if (x < b) {
      a = 0 + `%`;
    } else {
      a = w * Math.floor(x / b) + `%`;
    }
    return a;
  }
  let arrelements = [];
  for (let x = 0; x < amount; x++) {
    arrelements.push(
      React.createElement("div", {
        style: {
          backgroundPositionX: bgpositionx(x, amount),
          backgroundPositionY: bgpositiony(x, amount),
          width: `${widthmax / Math.pow(amount, 0.5)}` + `px`,
          height: `${widthmax / Math.pow(amount, 0.5)}` + `px`,
        },
        className: "div",
        id: x,
        onClick: (e) => {
          handleClick(e);
        },
      })
    );
  }
  function changeid(arr, arrpositionx, arrpositiony) {
    let buttons = document.querySelectorAll(".div");
    console.log("jestem w funkcji");

    for (Element of arr) {
    }
    for (Element of buttons) {
      if (Element.id == arr[1] || Element.id == arr[0]) {
        if (Element.id == arr[1]) {
          console.log("warunek 1");
          Element.setAttribute("id", arr[0]);
          Element.style.backgroundPositionX = `${arrpositionx[0]}`;
          Element.style.backgroundPositionY = `${arrpositiony[0]}`;

          // console.log(Element)
        } else if (Element.id == arr[0]) {
          console.log("warunek drugi");
          Element.setAttribute("id", arr[1]);
          Element.style.backgroundPositionX = `${arrpositionx[1]}`;
          Element.style.backgroundPositionY = `${arrpositiony[1]}`;
        }
      }
    }
  }

  return (
    <>
      <div className="flex" style={{ maxWidth: `${widthmax}` + `px` }}>
        <Game board={arrelements} game={game} setGame={setGame} />
      </div>
    </>
  );
}

export default Board;
