import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Game from './components/Game';
function App() {

  //w wymieszanej tablicy wymienic kazdy i dac mu name takie jak ma jak bedzie x (petla for dla arr i setatribute),
  //jak name i id bedzie sie w kazdym zgadzac to wygrales
  const [counter,setCounter] = useState(0);
  const [game, setGame] = useState([])
  let arr = []

  const handleClick = event => {
    // console.log(event.currentTarget.id);
    if(arr.length < 1){
      arr.push(event.currentTarget.id)
      // console.log(arr)
    }
    else{
      arr.push(event.currentTarget.id);
      // console.log(arr);
      changeid(arr);
      arr = [];
    }
  };
  let arrelements = [];
for(let x = 0; x <5; x++){
  arrelements.push(React.createElement('div', {className: "div", id: x,  onClick: (e) => {
    // cleanarray(indexarr);
   handleClick(e)
   
  }, }));
}
 function changeid(arr)
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
      console.log(Element)
      }  
       else if (Element.id == arr[0]){
        // console.log(Element);
        // console.log(arr[0])
        console.log("warunek drugi")
      Element.setAttribute('id', arr[1]);
      // console.log(Element)
      }
    }

}
   }



  return (
    <>
    {/* <div
    className='div'
    id = "1"
    key= "1"
    name="1"
    onClick={(e) => {         handleClick(e)

          }}  
        />
    <div id = "2"
        className='div'
name="2"
     key= "2"
     onClick={(e) => {          handleClick(e)

     }}  
        />
    <div id = "3" key= "3"
        className='div'
name="3"
onClick={(e) => {          handleClick(e)

}}  
  />    <div id = "4"
     key= "4"
     className='div'
name="4"
onClick={(e) => {          handleClick(e)

}}  
       />     
        <div id = "5"
     key= "5"
     className='div'
name="5"
onClick={(e) => {          handleClick(e)

}}  
       />      */}

<h1>{counter}</h1>
{/* {arrelements} */}
<hr/>
<Game board={arrelements}
  game={game}
  setGame={setGame}/>
    </>
  );
}

export default App;
