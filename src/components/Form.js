import React, { useState, useEffect } from "react";
function Form({ info, setInfo, startgame, setStartgame }) {
  // console.log(arrcheck);
  const postDataHandler = (e) => {
    e.preventDefault();
  
    // console.log("jestem w funkcji");
    if (info.amount != ""  && info.img != "") {
    //   setStartgame(true);
      setStartgame(() => {
        return (true);
      });
    }
  };
console.log(startgame)
  return (
    <>
      <>
        <form onSubmit={postDataHandler}>
         
           <div className="container-select">
           <label className="label-legend">Podaj ilość elementów:</label>

            <div className="select">
            <label>4</label>

            <input
              type="checkbox"
              className="input-lang"
              checked={info.amount == "4"}
              onChange={(e) => {
                setInfo((prevState) => {
                  return { ...prevState, amount: 4};
                });
              }}
            />
            </div>
            <div className="select">
            <label>9</label>

            <input
              type="checkbox"
              className="input-lang"
              checked={info.amount ==" 9"}
              onChange={(e) => {
                setInfo((prevState) => {
                  return { ...prevState, amount: 9};
                });
              }}
            />
            </div>
            <div className="select">
            <label>16</label>

            <input
              type="checkbox"
              className="input-lang"
              checked={info.amount == 16}
              onChange={() => {
                setInfo((prevState) => {
                  return { ...prevState, amount: 16 };
                });
              }}
            />
            </div>
            <div className="select">
            <label>25</label>

            <input
              type="checkbox"
              className="input-lang"
              checked={info.amount == 25}
              onChange={() => {
                setInfo((prevState) => {
                  return { ...prevState, amount: 25};
                });
              }}
            />
            </div>
            {/* <label className="label-legend">Wybierz zdjęcie:</label>
            </div>
              <div className="container-pictrue">
              <div className="div-img">
              <img 
              className="img-form"
              src={require("../images/image-1.jpg")} />

            <input
              type="checkbox"
              className="input-lang"
              checked={info.img == 1}
              onChange={(e) => {
                setInfo((prevState) => {
                  return { ...prevState, img: 1};
                });
              }}
            />
          </div>
          <div className="div-img">
              <img 
              className="img-form"
              src={require("../images/image-2.jpg")} />

            <input
              type="checkbox"
              className="input-lang"
              checked={info.img == 2}
              onChange={(e) => {
                setInfo((prevState) => {
                  return { ...prevState, img: 2};
                });
              }}
            />
          </div>
          <div className="div-img">
              <img 
              className="img-form"
              src={require("../images/image-3.jpg")} />

            <input
              type="checkbox"
              className="input-lang"
              checked={info.img == 3}
              onChange={(e) => {
                setInfo((prevState) => {
                  return { ...prevState, img: 3};
                });
              }}
            />
          </div>
          
            <label>
              <img  src={require("../images/image-2.jpg").default} />
            </label> */}

          
          </div>
          

            <button className="button-start"
            type="submit"
            >Rozpocznij grę</button>
        </form>
      </>
    </>
  );
}

export default Form;
