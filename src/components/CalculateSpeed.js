import React from "react";

const CalculateSpeed = ({ time, wordLength }) => {
  let wpm = wordLength / 5 / (time / 60);
  // let wpm = 60;

  return (
    <div className="wpm u-center-text">
      <h1 className={`wpm__wpm ${wpm <= 30 ?
                        "wpm__wpm--red":
                      wpm > 30 && wpm <= 75 ?
                        "wpm__wpm--yellow":
                        "wpm__wpm--green"}`}>
        {wpm.toFixed(2)} WPM
      </h1>
      
      {wpm <= 30 ? 
        <h2 className="wpm__message">Keep practicing!</h2> :
       wpm > 30 && wpm <= 75 ?
        <h2 className="wpm__message">You're doing well!</h2>:
        <h2 className="wpm__message">You're an expert!</h2>
       }

      <h2 className="wpm__time">You finished in {time} seconds</h2>
    </div>
  );
};
export default CalculateSpeed;
