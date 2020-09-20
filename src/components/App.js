import React, { useState } from "react";

import TextInput from "./TextInput";
import Timer from "./Timer";
import CalculateSpeed from "./CalculateSpeed";
import DisplayCompletedWords from './DisplayCompletedWords';
import randomParagraph from "./getRandom";

const App = () => {
  const [wordIndex, updateWordIndex] = useState(0);
  const [paragraph, updateParagraph] = useState("");
  const [typedLength, updateTypedLength] = useState(0);
  const [time, updateTime] = useState(0);
  const [nextWord, showNextWord] = useState(false);
  const [isPlaying, updateIsPlaying] = useState(false);
  const [isComplete, updateCompletion] = useState(false);
  const [completedWords, updateCompletedWord] = useState([]);

  const newWord = () => {
    showNextWord(!nextWord);
  };

  const updateWord = (paragraph) => {
    if (paragraph) {
      if (nextWord) {
        updateWordIndex(wordIndex + 1);
        newWord();
      }
      return paragraph.split(" ")[wordIndex];
    }
  };

  const randomSentence = () => {
    updateIsPlaying(false);
    updateCompletion(false);
    if (!isComplete) {
      updateParagraph(randomParagraph());
    }
  };

  const startGame = () => {
    updateWordIndex(0);
    updateTime(0);
    updateTypedLength(0);
    updateCompletedWord([]);
    randomSentence();
  };

  const addCompletedWord = (word) => {
    let updatedCompleted = completedWords;
    updatedCompleted.push(word);
    updateCompletedWord(updatedCompleted);
  }

  return (
    <main className="main">
      <div className="logo__container">
        <span className="logo__container--logo">&para;</span>
      </div>
      <Timer
        timeChange={updateTime}
        seconds={time}
        isPlaying={isPlaying}
        isComplete={isComplete}
      />

      {isComplete ? (
        <CalculateSpeed time={time} wordLength={typedLength} />
      ) : null}

    <DisplayCompletedWords 
      completedWords={completedWords}
    />

    <TextInput
      updateCompletedWord={addCompletedWord}
      updatePlaying={updateIsPlaying}
      isPlaying={isPlaying}
      updateTypedLength={updateTypedLength}
      length={typedLength}
      currentWord={updateWord(paragraph)}
      nextWord={newWord}
      isComplete={updateCompletion}
      startGame={startGame}
      />

    </main>
  );
};
export default App;
