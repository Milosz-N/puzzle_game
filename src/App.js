import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Game from './components/Game';
import "./scss/main.scss"
// import {a} from "../src/images"
function App() {
  let widthmax = 1200;
  //w wymieszanej tablicy wymienic kazdy i dac mu name takie jak ma jak bedzie x (petla for dla arr i setatribute),
  //jak name i id bedzie sie w kazdym zgadzac to wygrales
  const [counter,setCounter] = useState(0);
  const [amount, setAmoount] = useState("4");
  const [game, setGame] = useState([]);
  const [img, setImg] = useState("1");
  const [startgame, setstartgame] = useState(false)
  let arr = []
  let arrpositionx = [];
  let arrpositiony = [];
  const handleClick = event => {
    console.log(event.currentTarget.attributes.style)
    // console.log(event.currentTarget);
    console.log(event.currentTarget.style.backgroundPositionX)
    if(arr.length < 1){
      arr.push(event.currentTarget.id)
      // console.log(arr)
      arrpositionx.push(event.currentTarget.style.backgroundPositionX)
      arrpositiony.push(event.currentTarget.style.backgroundPositionY);
    }
    else{
      arr.push(event.currentTarget.id);
      arrpositionx.push(event.currentTarget.style.backgroundPositionX)
      arrpositiony.push(event.currentTarget.style.backgroundPositionY);
      // console.log(arr);
      changeid(arr, arrpositionx, arrpositiony);
      arr = [];
      arrpositionx=[];
      arrpositiony=[];
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
  // console.log(a)
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
for(let x = 0; x <4; x++){
  arrelements.push(React.createElement('div', {
  style: {
    backgroundPositionX: bgpositionx(x, amount),
    backgroundPositionY: bgpositiony(x, amount),
    width: `${widthmax / Math.pow(amount, 0.5)}` + `px`,
    height: `${widthmax / Math.pow(amount, 0.5)}` + `px`,

  },
    // '../src/images/image-2.jpg')
    className: "div", id: x,  onClick: (e) => {
    // cleanarray(indexarr);
    // src={require("../src/images/image-3.jpg")} 
   handleClick(e)
   
  }, }));
}
 function changeid(arr, arrpositionx, arrpositiony)
 {

  let buttons = document.querySelectorAll(".div");
  // console.log(arr);
  console.log("jestem w funkcji");
  
  for(Element of arr){
  //  console.log(Element.id)
  }
  for(Element of buttons){
    if(Element.id == arr[1] || Element.id == arr[0]){
      if(Element.id== arr[1]) {
        // console.log(arr[1].id);
        
      // console.log(Element);
      console.log("warunek 1");
      // console.log(arr[1])
      // console.log(Element.id)
      Element.setAttribute('id',arr[0]);
      // Element.setAttribute('background-position-x', arrpositionx[0])
      // Element.setAttribute('background-position-y', arrpositiony[0])
      Element.style.backgroundPositionX = `${arrpositionx[0]}`
      Element.style.backgroundPositionY = `${arrpositiony[0]}`


      // console.log(Element)
      }  
       else if (Element.id == arr[0]){
        // console.log(Element);
        // console.log(arr[0])
        console.log("warunek drugi")
      Element.setAttribute('id', arr[1]);
      // console.log(Element)
      Element.style.backgroundPositionX = `${arrpositionx[1]}`
      Element.style.backgroundPositionY = `${arrpositiony[1]}`
      }
    }

}
   }



  return (
    <>
 
{/* {arrelements} */}
<hr/>
{/* <img src="../src/images/image-1.png"/> */}
{/* <img  src={require("../src/images/image-1.jpg")} /> */}
<label>
<img 
className='img-legend'
src={require("../src/images/image-1.jpg")} />
            </label>
<input
              type="checkbox"
              className="input-lang"
              checked={game == "1"}
              onChange={() => {
                setGame("1");
              }}
            />
            <label>
<img 
className='img-legend'

src={require("../src/images/image-2.jpg")} />
            </label>
            <input
              type="checkbox"
              className="input-lang"
              checked={game == "2"}
              onChange={() => {
                setGame("2");
              }}
            />
            <label>
<img
className='img-legend'

src={require("../src/images/image-3.jpg")} />
            </label>
             <input
              type="checkbox"
              className="input-lang"
              checked={game == "3"}
              onChange={() => {
                setGame("3");
              }}
            />
            <div className='flex'
            style={{    maxWidth: `${widthmax}` + `px`,
          }}
            >
<Game board={arrelements}
  game={game}
  setGame={setGame}/>
  </div>
    </>
  
  );
}

export default App;
