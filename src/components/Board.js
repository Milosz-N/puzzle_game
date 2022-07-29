import React, { useState, useEffect, useTransition } from "react";
// import Game from './components/Game';
import Game from "./Game";
import "../scss/main.scss";
import {imageone} from "../images/image-1.jpg"
// import {a} from "../src/images"
function Board({amount, img, counter, setCounter, finish, setFinish, startgame}) {
  // console.log(img)
  const [cardwidth, setCardwidth] = useState(0) //zmienic tutaj maksymalna szerokosc
   
  useEffect(() => {
    let x = 0;
   if(counter%2==false && counter > 0){
    // console.log("spelniam warunek w useeffect");
    let div = document.querySelectorAll(".div");
    // for(Element of div){
    //   if(Element.classList.contains("border")){
    //     console.log(Element);
    //     Element.classList.add("animation")
    //   }
    // }
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
  let arrkey =[];
  const handleClick = (event) => {
    let div = document.querySelectorAll(".div");
    // console.log(event.currentTarget.attributes.key.value)
    if (arr.length < 1) {
      for(Element of div){
        if(Element.attributes.id == arr[0]){
          console.log(Element);
        }
      }
      for(Element of div){
        if(Element.classList.contains("border")){
          Element.classList.remove("border")
          // console.log(Element);
        }
      }
      arr.push(event.currentTarget.id);
      arrkey.push(event.currentTarget.attributes.key.value)

      arrpositionx.push(event.currentTarget.style.backgroundPositionX);
      arrpositiony.push(event.currentTarget.style.backgroundPositionY);
      for(Element of div){
        if(Element.attributes.id.value == arr[0]){
          Element.classList.add("border")
          // console.log(Element);
        }
      }
    } 
    else {
      if(arr[0] != event.currentTarget.id){
      arr.push(event.currentTarget.id);
      for(Element of div){
        if(Element.attributes.id.value == arr[1]){
          Element.classList.add("border")
          // console.log(Element);
        }
      }
      arrkey.push(event.currentTarget.attributes.key.value)

      arrpositionx.push(event.currentTarget.style.backgroundPositionX);
      arrpositiony.push(event.currentTarget.style.backgroundPositionY);
      changeid(arr, arrpositionx, arrpositiony,arrkey);
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
  function changeid(arr, arrpositionx, arrpositiony, arrkey) {
    // console.log(arrkey)
    let buttons = document.querySelectorAll(".div");
    console.log("jestem w funkcji");
    // console.log(Number.parseInt(arrkey[0]/Math.pow(amount, 0.5)));
    // console.log(Number.parseInt(arrkey[1]/Math.pow(amount, 0.5)));
    let a = Number.parseInt(arrkey[0]/Math.pow(amount, 0.5));
    let b = Number.parseInt(arrkey[1]/Math.pow(amount, 0.5));
    console.log(a);
    console.log(b);
    console.log(Number.parseInt(buttons[0].style.width) * (a-b))
    // let y = a-b;
    let c =Number.parseInt(buttons[0].style.width) * (a-b);

    let d = c+`px`;
    let e = (c*(-1) + `px`)
    // console.log(y);
    // console.log(buttons[0].style.width);
    // console.log(Number.parseInt(buttons[0].style.width) * y)
    if(Number.parseInt(arrkey[0]) >Number.parseInt( arrkey[1])){
      console.log("jestem na warunku gdzie pierwszy element ma wyzszy key");
      console.log(a-b);
      // console.log(Number.parseInt(arrkey[0]/Math.pow(amount, 0.5))-(Number.parseInt(arrkey[1]/Math.pow(amount, 0.5))));
      // x = Number.parseInt(arrkey[0]/Math.pow(amount, 0.5))-(Number.parseInt(arrkey[1]/Math.pow(amount, 0.5)))
    }
    else{
      console.log("jestem na warunku gdzie pierwszy ma nizszy key");
      console.log(a-b);

      // console.log(Number.parseInt(arrkey[0]/Math.pow(amount, 0.5))-(Number.parseInt(arrkey[1]/Math.pow(amount, 0.5))));
      // x = Number.parseInt(arrkey[0]/Math.pow(amount, 0.5))-(Number.parseInt(arrkey[1]/Math.pow(amount, 0.5)))
    }
    // console.log(buttons[0].style.height);
    const newspaperSpinning = [
      { transform: `${`translateY(${d})`}`},
      // { transform: `${`translateY(300)`}`},

      { transform: 'translate(0)' },
      
    ];
    const newspaperSpinningsecond = [
      { transform: `${`translateY(${e})`}`},
      // { transform: `${`translateY(300)`}`},

      { transform: 'translate(0)' },
      
    ];
    
    const newspaperTiming = {
      duration: 2000,
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
      {/* <h2>{ww}</h2> */}

    </>
  );
}

export default Board;
