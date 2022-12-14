import React, { useState, useEffect } from "react";
import Board from "./Board";
import Form from "./Form";

function Home() {
  const [info, setInfo] = useState({  amount: "", img: 1 });
  const [startgame, setStartgame] = useState(false);
  const [counter, setCounter] = useState(0);
  const [finish, setFinish] = useState(false);
  
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
     :  finish == true ? 
     <>
     <div className="image-finish">
      <div>
     <h2>Wygrałeś</h2>
     <button className="button-start"
     onClick={()=> {
      setStartgame(false);
      setFinish(false)
     }}
            
            >Rozpocznij nową grę</button>
           </div>
            </div>
     </>
      : <>
      <Board
     amount={info.amount}
     img = {info.img}
     counter={counter}
     setCounter={setCounter}
     finish={finish}
     setFinish={setFinish}
     startgame={startgame}
     />
      </>
     
}
    
    </>
  );
}

export default Home;
