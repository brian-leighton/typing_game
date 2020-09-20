import React, { useEffect, useState } from "react";

const Timer = ({ isPlaying, timeChange, isComplete, seconds }) => {
  const [startTime, updateStartTime] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      updateStartTime(Date.now());
    }
  }, [isPlaying, updateStartTime]);

  useEffect(() => {
    if (isComplete) {
      timeChange(Math.floor((Date.now() - startTime) / 1000));
    }
  }, [isComplete, timeChange, startTime]);

  return (
    <div className="timer">
      <div className="timer__text-box u-center-text">
        <h1 className="heading--primary ">Speedy-Typo </h1>
        {!isPlaying ? <p className="heading--secondary">Improve your typing, and reading speeds.</p> : null }
      </div>
    </div>
  );
};
export default Timer;
