import React, { useState, useEffect } from "react";
import Board from "./Board";
import Form from "./Form";
function Home() {
  // console.log(arrcheck);
  const [info, setInfo] = useState({  amount: "", img: "" });
  const [startgame, setStartgame] = useState(false);
  const [amount, setAmoount] = useState("");

  //info.amount idzie jako zmienna do board
    //img jako nowa zmienna, jej wczesniej nie bylo
  return (
    <>
    {startgame == false ?  <Form
        info={info}
        setInfo={setInfo}
        startgame={startgame}
        setStartgame={setStartgame}
        amount={amount}
        setAmoount={setAmoount}
      />
     : <Board
     amount={info.amount}
     />
    }
    </>
  );
}

export default Home;
