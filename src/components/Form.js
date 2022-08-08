import React from "react";
function Form({ info, setInfo, setStartgame }) {
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
  return (
    <>
      <>
        <form onSubmit={postDataHandler}>
         
           <div className="container-select">
           <label className="label-legend">Podaj ilość elementów:</label>

           
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
            <div className="select">
            <label>36</label>

            <input
              type="checkbox"
              className="input-lang"
              checked={info.amount =="36"}
              onChange={(e) => {
                setInfo((prevState) => {
                  return { ...prevState, amount: 36};
                });
              }}
            />
            </div>
        
          
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
