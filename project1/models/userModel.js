"use strict";

const words = require("../words");
const compare = require("./compare");

const gameData = {};
const gameStats = {};
const leaderBoard = [];

const getPossibleWords = () => {
  const wordCount = words.length;
  const collections = [];

  while (collections.length < 10) {
    const randomIndex = Math.floor(Math.random() * wordCount);
    if (!collections.includes(randomIndex)) {
      collections.push(randomIndex);
    }
  }

  return collections.map((index) => words[index]);
};

const getGameState = (username) =>
  gameData[username] || {
    guesses: [],
    possibleWords: [],
    secretWord: "",
    correct: false,
  };

const newGame = (username) => {
  const possibleWords = getPossibleWords();
  const secretWord =
    possibleWords[Math.floor(Math.random() * possibleWords.length)];

  gameData[username] = {
    possibleWords,
    secretWord,
    guesses: [],
    correct: false,
  };

  gameStats[username] = gameStats[username] ?? {
    totalGames: 0,
    completedGames: 0,
    highScore: null,
    lowScore: null,
    totalGuesses: 0,
    averageScore: null,
  };

  gameStats[username].totalGames += 1;

  console.log(`New game for ${username}, secret word: ${secretWord}`);
};

const makeGuess = (username, guess) => {
  const game = gameData[username];
  const formatGuess = guess.toLowerCase();

  if (!game.possibleWords.includes(formatGuess)) {
    return {
      valid: false,
      message: "Invalid guess! Your guess is not in the possible words list.",
    };
  }

  if (game.guesses.some((g) => g.word === formatGuess)) {
    return {
      valid: false,
      message: "Invalid guess! Your word has already been guessed.",
    };
  }

  const matchCount = compare(game.secretWord, formatGuess);
  game.guesses.push({ word: formatGuess, matchCount });

  if (formatGuess === game.secretWord) {
    game.correct = true;
    gameStats[username].completedGames += 1;
    const guessCount = game.guesses.length;
    gameStats[username].totalGuesses += guessCount;
    gameStats[username].averageScore =
      gameStats[username].totalGuesses / gameStats[username].completedGames;

    if (
      gameStats[username].highScore === null ||
      guessCount < gameStats[username].highScore
    ) {
      gameStats[username].highScore = guessCount;
    }
    if (
      gameStats[username].lowScore === null ||
      guessCount > gameStats[username].lowScore
    ) {
      gameStats[username].lowScore = guessCount;
    }
    updateLeaderboard(username, guessCount);

    return { valid: true, correct: true, message: "Correct guess, you won!" };
  }

  return {
    valid: true,
    correct: false,
    matchCount,
    message: `Incorrect guess! You have ${matchCount} letters in common with the secret word.`,
  };
};

const updateLeaderboard = (username, score) => {
  const existingUser = leaderBoard.find((user) => user.username === username);
  if (existingUser) {
    existingUser.bestScore = Math.min(existingUser.bestScore, score);
  } else {
    leaderBoard.push({ username, bestScore: score });
  }
  leaderBoard.sort((a, b) => a.bestScore - b.bestScore);
};

const getLeaderboard = () => leaderBoard;

const getGameStats = (username) => gameStats[username] || {};

const clearGameState = (username) => {
  delete gameData[username];
};

module.exports = {
  getGameState,
  newGame,
  makeGuess,
  clearGameState,
  getGameStats,
  getLeaderboard,
};
