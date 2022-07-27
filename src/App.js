import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
function App() {
  const [counter,setCounter] = useState(0)
  let arr = []

  const handleClick = event => {
    console.log(event.currentTarget.id);
    if(arr.length == 0){
      arr.push(event.currentTarget)
      console.log(arr)
    }
    else{
      arr.push(event.currentTarget);
      console.log(arr);
      changeid(arr);
      arr = [];
    }
  };
 function changeid(arr)
 {
  let buttons = document.querySelectorAll(".div");
  console.log(arr);
  console.log("jestem w funkcji");
  for(Element of arr){
   console.log(Element.id)
  }
  for(Element of buttons){
    if(Number.parseInt(Element.id) == Number.parseInt(arr[0].id) ||Number.parseInt(Element.id) == Number.parseInt(arr[1].id) ){
      console.log(Element);
    }
   }
}


  return (
    <>
    <div
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
       />     
<h1>{counter}</h1>
    </>
  );
}

export default App;
