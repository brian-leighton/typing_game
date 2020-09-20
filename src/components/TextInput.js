import React, { useState, useEffect } from "react";

const TextInput = ({
  currentWord,
  nextWord,
  updatePlaying,
  updateTypedLength,
  isComplete,
  isPlaying,
  length,
  updateCompletedWord,
  startGame
}) => {
  const [typedWord, updateInputTerm] = useState("");
  const [typedLength, updateLength] = useState(0);

  useEffect(() => {
    if (typedWord.length > 0 && !isPlaying) {
      updatePlaying(true);
    }
  }, [typedWord, currentWord, updatePlaying, isPlaying]);

  // Checks if passed array has no more values, if no values (undefined), the paragraph is completed
  useEffect(() => {
    if (isPlaying && currentWord === undefined) {
      isComplete(true);
    }
  }, [currentWord, isComplete, isPlaying]);

  // Checks to see if typed word is === to passed word from parent array
  useEffect(() => {
    if (currentWord === typedWord) {
      // clears input value on word match
      updateCompletedWord(currentWord);
      updateInputTerm("");
      // serves up next word
      nextWord();

      updateTypedLength((length += currentWord.length));
    }
  }, [typedWord, currentWord, nextWord, typedLength]);

  return (
    <div className="input">
      <div className="input__text-box u-center-text u-margin-bottom-large">
         <h1 className="input__text-box--current">{currentWord}</h1> 
      </div>

      <input
        className="input__text"
        type="text"
        onChange={(e) => {
          updateInputTerm(e.target.value.trim());
        }}
        value={typedWord}
      />

    {!isPlaying ? <div className="start__button u-center-text">
      <div className="start__button--text" onClick={() => {startGame()}}>Start Game</div>
    </div> : <div className="start__button">
      <div className="start__button--text u-center-text" onClick={() => {startGame()}}>Restart Game</div>
    </div>}
      
  </div>
  );
};

export default TextInput;
