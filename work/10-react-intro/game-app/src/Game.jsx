import { useState } from "react";
import Compare from "./Compare";
import "./Game.css";

function Game({ username, onLogout }) {
  const [guessWord, setGuessWord] = useState("");
  const [message, setMessage] = useState("");
  const secretWord = "RECAT";

  return (
    <div className="game">
      <h1 className="game__title">Welcome, {username}!</h1>
      <button className="game__logout-button" onClick={onLogout}>
        Logout
      </button>
      <form
        className="game__form"
        onSubmit={(e) => {
          e.preventDefault();
          if (guessWord.length !== 5) {
            setMessage(`${guessWord} was not a valid word.`);
          } else if (guessWord.toUpperCase() === secretWord) {
            setMessage(`${guessWord} is the secret word!`);
          } else {
            const commonLetter = Compare(guessWord, secretWord);
            setMessage(
              `${guessWord} has ${commonLetter} common letters in common.`
            );
          }
          setGuessWord("");
        }}
      >
        <label className="game__form-label">
          <span>Please enter a 5-character word: </span>
          <input
            className="game__form-input"
            value={guessWord}
            onInput={(e) => setGuessWord(e.target.value)}
          />
        </label>
        <button className="game__form-button" type="submit">
          Submit
        </button>
      </form>
      <div className="game__message-container">
        {message && <p className="game__message">{message}</p>}
      </div>
    </div>
  );
}

export default Game;
