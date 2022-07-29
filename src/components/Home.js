import React, { useState, useEffect } from "react";
import Board from "./Board";
import Form from "./Form";
import Transition from "./Transsition";

function Home() {
  const [info, setInfo] = useState({  amount: 16, img: 1 });
  const [startgame, setStartgame] = useState(true);
  const [counter, setCounter] = useState(0);
  const [finish, setFinish] = useState(false);
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    // console.log("spelniam warunek w useeffect");
    let div = document.querySelectorAll(".div");
    for(Element of div){
  
     Element.classList.add("finish");
     
    
    }
   
  
   
  }, [finish]);
  
  
  
 
  return (
    <>
    {startgame == false ?  <Form
        info={info}
        setInfo={setInfo}
        startgame={startgame}
        setStartgame={setStartgame}
        
      />
     : <Board
     amount={info.amount}
     img = {info.img}
     counter={counter}
     setCounter={setCounter}
     finish={finish}
     setFinish={setFinish}
     startgame={startgame}
     />
    }
     {finish == true ? 
     <h2>Wygrałeś</h2>
     : <></>
    }
    <hr/>
    <Transition/>
    </>
  );
}

export default Home;
