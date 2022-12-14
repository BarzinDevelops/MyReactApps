import React from "react";

function Jokes(props) {
  return (
      <div className="joke-wrapper">
      <h4 className="joke-name">{props.myJokes.name}:</h4>
        {props.myJokes.question && (
          <>
            <span className="question-word">Question: </span><p className="question">{props.myJokes.question} </p>
            <span className="answer-word">Answer: </span><p className="answer"> {props.myJokes.punchline} </p>
          </>
        )}
        {!props.myJokes.question && <p className="answer">{props.myJokes.punchline}</p>}
      </div>
  );
}

export default Jokes;
