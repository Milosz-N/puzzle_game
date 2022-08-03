import React, { useState, useEffect } from "react";
// import Game from './components/Game';
import Game from "./Game";
import "../scss/main.scss";

// import {a} from "../src/images"
function Board({amount, img, counter, setCounter, finish, setFinish, startgame}) {
  const [cardwidth, setCardwidth] = useState(0) //zmienic tutaj maksymalna szerokosc
  const [game, setGame] = useState([]);
  useEffect(() => {
    let x = 0;
   if(counter%2==false && counter > 0){
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
  let arr = [];
  let arrpositionx = [];
  let arrpositiony = [];
  let arrkey =[];
  const handleClick = (event) => {
    let div = document.querySelectorAll(".div");
    if (arr.length < 1) {
      for(Element of div){
        if(Element.attributes.id == arr[0]){
          console.log(Element);
        }
      }
      for(Element of div){
        if(Element.classList.contains("border")){
          Element.classList.remove("border")
        }
      }
      arr.push(event.currentTarget.id);
      arrkey.push(event.currentTarget.attributes.key.value)

      arrpositionx.push(event.currentTarget.style.backgroundPositionX);
      arrpositiony.push(event.currentTarget.style.backgroundPositionY);
      for(Element of div){
        if(Element.attributes.id.value == arr[0]){
          Element.classList.add("border")
        }
      }
    } 
    else {
      if(arr[0] != event.currentTarget.id){
      arr.push(event.currentTarget.id);
      for(Element of div){
        if(Element.attributes.id.value == arr[1]){
          Element.classList.add("border")
        }
      }
      arrkey.push(event.currentTarget.attributes.key.value)

      arrpositionx.push(event.currentTarget.style.backgroundPositionX);
      arrpositiony.push(event.currentTarget.style.backgroundPositionY);
      changeid(arr, arrpositionx, arrpositiony,arrkey, finish);
      arr = [];
      arrpositionx = [];
      arrpositiony = [];
      arrkey =[];
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
  function changeid(arr, arrpositionx, arrpositiony, arrkey, finish) {
    console.log(finish)
    let buttons = document.querySelectorAll(".div");
   
    let a = Number.parseInt(arrkey[0]/Math.pow(amount, 0.5));
    let b = Number.parseInt(arrkey[1]/Math.pow(amount, 0.5));
   

  
    let c =Number.parseInt(buttons[0].style.width) * (a-b);

    let d = c+`px`;
    let e = (c*(-1) + `px`);
    let f = Number.parseInt(arrkey[0]%(Math.pow(amount, 0.5)) * c);
    let g = f + `px`;
    let h= Number.parseInt(arrkey[1]%(Math.pow(amount, 0.5)) * c);
    let j = h+`px`;
   
    let k =( arrkey[0]%Math.pow(amount, 0.5) * Number.parseInt(buttons[0].style.width)) + `px`
    let l =( arrkey[1]%Math.pow(amount, 0.5) * Number.parseInt(buttons[1].style.width)) + `px`;

    let m = (Number.parseInt(arrkey[0]%(Math.pow(amount, 0.5))) - Number.parseInt(arrkey[1]%(Math.pow(amount, 0.5)))) * Number.parseInt(buttons[0].style.width)  + `px` 
    let n = (Number.parseInt(m)) * (-1) +`px`
    
    const newspaperSpinning = [
      { 
       
        transform: `${`translate(${m},${d})`}`,
    },

      { transform: 'translate(0)',

    },
      
    ];
    let u;
    if(arrkey[0] > arrkey[1]){
      u = m
    }
    else{
      u = n
    }
    const newspaperSpinningsecond = [
      { className: "xd",
       
        transform: `${`translate(${n},${e})`}`,
        //ten jest poprawny



    },

      { transform: 'translate(0)' ,

    },
      
    ];
    
    const newspaperTiming = {
      duration: 1000,
      iterations: 1,
    }
   
    for (Element of buttons) {
      if (Element.id == arr[1] || Element.id == arr[0]) {
        if (Element.id == arr[1]) {

          console.log("warunek 1");
          Element.setAttribute("id", arr[0]);
          // console.log(Element.style.width)
          Element.style.backgroundPositionX = `${arrpositionx[0]}`;
          Element.style.backgroundPositionY = `${arrpositiony[0]}`;
          Element.animate(newspaperSpinning, newspaperTiming);
          // console.log(Element)
        } else if (Element.id == arr[0]) {

          console.log("warunek drugi");
          
          Element.setAttribute("id", arr[1]);
          Element.style.backgroundPositionX = `${arrpositionx[1]}`;
          Element.style.backgroundPositionY = `${arrpositiony[1]}`;
          Element.animate(newspaperSpinningsecond, newspaperTiming);

          // console.log(Element)
        }
      }
    
  }
  }

  return (
    <>
      <div className="flex" style={{ maxWidth: `${widthmax}` + `px` }}>
        <Game board={arrelements} game={game} setGame={setGame} img={img} />
      </div>

    </>
  );
}

export default Board;
