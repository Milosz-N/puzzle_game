import React, { useState, useEffect } from "react";
function Game({ board, game, setGame }) {
  // console.log(arrcheck);
  var list;
 
  useEffect(() => {
    list = board.sort(() => Math.random() - 0.5);
    // console.log(list);
   
    setGame(board.sort(() => Math.random() - 0.5));
    // console.log(game)
  }, []);
  useEffect(() => {
    let a = document.querySelectorAll(".div");

    for(let x  = 0; x <a.length; x++){
      // console.log(a[x])
      // console.log(a[x]._owner.return);
      a[x].setAttribute('key',x);
    }
  }, [game]);
  
  
  return <>{game}</>;
}

export default Game;