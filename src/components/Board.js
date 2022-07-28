import React, { useState, useEffect } from "react";
// import Game from './components/Game';
import Game from "./Game";
import "../scss/main.scss";
import {imageone} from "../images/image-1.jpg"
// import {a} from "../src/images"
function Board({amount, img, counter, setCounter, finish, setFinish, startgame}) {
  // console.log(img)

   
  useEffect(() => {
    let x = 0;
   if(counter%2==false && counter > 0){
    // console.log("spelniam warunek w useeffect");
    let div = document.querySelectorAll(".div");
    for(Element of div){
  
      if(Number.parseInt(Element.attributes.id.value) === Number.parseInt(Element.attributes.key.value)){
          x=x+1;
        // console.log(x);
        }
    
    }
    
    if(x == amount){
      setFinish(true);
      
    }
   
    
  
   }
   
  
  }, [counter]);
 
  let widthmax = 630;
  const [game, setGame] = useState([]);
  // const [startgame, setstartgame] = useState(false);
  let arr = [];
  let arrpositionx = [];
  let arrpositiony = [];
  const handleClick = (event) => {
    let div = document.querySelectorAll(".div");
    
    if (arr.length < 1) {
      for(Element of div){
        if(Element.classList.contains("border")){
          Element.classList.remove("border")
          console.log(Element);
        }
      }
      arr.push(event.currentTarget.id);
      arrpositionx.push(event.currentTarget.style.backgroundPositionX);
      arrpositiony.push(event.currentTarget.style.backgroundPositionY);
      for(Element of div){
        if(Element.attributes.id.value == arr[0]){
          Element.classList.add("border")
          console.log(Element);
        }
      }
    } else {
      if(arr[0] != event.currentTarget.id){
      arr.push(event.currentTarget.id);
      for(Element of div){
        if(Element.attributes.id.value == arr[1]){
          Element.classList.add("border")
          console.log(Element);
        }
      }
      arrpositionx.push(event.currentTarget.style.backgroundPositionX);
      arrpositiony.push(event.currentTarget.style.backgroundPositionY);
      changeid(arr, arrpositionx, arrpositiony);
      arr = [];
      arrpositionx = [];
      arrpositiony = [];
    }
    else{
      console.log("klikasz w to samo");
      setCounter(prevState => prevState - 1);
    }
    }
  };
  function bgpositionx(x, y) {
    let b = Math.pow(y, 0.5); //pierwiastek z amount
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
          width: `${(widthmax-30) / Math.pow(amount, 0.5)}` + `px`,
          height: `${(widthmax-30) / Math.pow(amount, 0.5)}` + `px`,
         
        },
        className: "div",
        id: x,
        onClick: (e) => {
          handleClick(e);
          setCounter(prevState => prevState + 1);
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
        <Game board={arrelements} game={game} setGame={setGame} img={img} />
      </div>
      {/* <h2>{ww}</h2> */}

    </>
  );
}

export default Board;
