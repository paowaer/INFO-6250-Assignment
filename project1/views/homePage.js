"use strict";

const homePage = (
  username,
  guesses,
  possibleWords,
  correct,
  message,
  stats,
  leaderboard
) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Word Guessing Game</title>
    <link rel="stylesheet" href="/styles.css">
  </head>
  <body>
    <div class="container">
      <nav class="main-navigation">
        <form action="/logout" method="POST" class="logout-form">
          <button type="submit" class="button-logout">Logout</button>
        </form>
        <div class="nav-links">
          <a href="/">Home | </a>
          <a href="#">Settings</a>
        </div>
      </nav>
      
      <header>
        <h1>Word Guessing Game</h1>
        <h2>Welcome, ${username}!</h2>
      </header>
      
      <div class="stats-panel">
        <div class="stats-column">
          <h3>Global Rank</h3>
          <ul class="leaderboard">
            ${leaderboard
              .map(
                (user) => `<li>${user.username}: ${user.bestScore} guesses</li>`
              )
              .join("")}
          </ul>
        </div>
        <div class="stats-column">
          <h3>Your Stats</h3>
          <ul class="stats-list">
            <li>Total Games Started: ${stats.totalGames || 0}</li>
            <li>Total Games Completed: ${stats.completedGames || 0}</li>
            <li>Best Score (Fewest Guesses): ${
              stats.highScore !== null ? stats.highScore : "N/A"
            }</li>
            <li>Worst Score (Most Guesses): ${
              stats.lowScore !== null ? stats.lowScore : "N/A"
            }</li>
            <li>Average Score: ${
              stats.averageScore !== null
                ? stats.averageScore.toFixed(2)
                : "N/A"
            }</li>
          </ul>
        </div>
      </div>

      <div class="game-panel">
        <div class="game-column">
          <h3>Possible Words</h3>
          <ul class="word-list">
            ${possibleWords.map((word) => `<li>${word}</li>`).join("")}
          </ul>
        </div>
        <div class="game-column">
          <h3>Your Guesses (${guesses.length} valid guesses)</h3>
          ${
            guesses.length > 0
              ? `<ul class="guess-list">${guesses
                  .map(
                    (guess) =>
                      `<li>${guess.word} (${guess.matchCount} letters match)</li>`
                  )
                  .join("")}</ul>`
              : "<p>No guesses made yet.</p>"
          }
        </div>
      </div>

      <div class="message-box ${correct ? "success" : "error"}">
        ${
          typeof message === "string"
            ? `<div class="message"><p>${message}</p></div>`
            : ""
        }
      </div>

      <div class="action-buttons">
        ${
          !correct
            ? `
              <form action="/guess" method="POST" class="guess-form">
                <label for="guess">Enter your guess: </label>
                <input type="text" name="guess" id="guess">
                <button type="submit" class="btn">Guess</button>
              </form>
            `
            : `<p>Would you like one more try?</p>`
        }
        <form action="/new-game" method="POST" class="new-game-form">
          <button class="button-new-game">Start New Game</button>
        </form>
      </div>
    </div>
  </body>
  </html>
`;

module.exports = homePage;
