import React from 'react';

const DisplayCompletedWords = ({completedWords}) => {
    return (
            <div className="completed_words">
                <h1 className="heading--tertiary u-center-text">Text Progress: </h1>
                <p className="completed_words__paragraph u-center-text">{completedWords.join(" ")} </p>
            </div>
        )
    }
export default DisplayCompletedWords;