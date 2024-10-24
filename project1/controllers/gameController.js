"use strict";

const {
  createSession,
  deleteSession,
  getUsername,
} = require("../models/sessionModel");

const {
  getGameState,
  newGame,
  makeGuess,
  clearGameState,
  getGameStats,
  getLeaderboard,
} = require("../models/userModel");

const loginPage = require("../views/loginPage");
const homePage = require("../views/homePage");

const showHomePage = (req, res, message) => {
  const username = getUsername(req.cookies.sid);
  if (!username) {
    return res.send(loginPage());
  }

  const gameState = getGameState(username);
  const { guesses, possibleWords, correct } = gameState;
  const stats = getGameStats(username);
  const leaderBoard = getLeaderboard();

  res.send(
    homePage(
      username,
      guesses,
      possibleWords,
      correct,
      message,
      stats,
      leaderBoard
    )
  );
};

const login = (req, res) => {
  const { username } = req.body;

  if (username === "dog") {
    return res.send(loginPage("Dog is not allowed, please try another!"));
  }

  if (!username || !/^[a-zA-Z0-9]+$/.test(username)) {
    return res.send(
      loginPage("Invalid Username. Only letters and numbers allowed.")
    );
  }

  const sid = createSession(username);
  res.cookie("sid", sid, { httpOnly: true });

  const gameState = getGameState(username);
  if (!gameState.guesses.length || gameState.correct) {
    newGame(username);
  }

  res.redirect("/");
};

const logout = (req, res) => {
  const sid = req.cookies.sid;
  if (sid) deleteSession(sid);
  res.clearCookie("sid");
  res.redirect("/");
};

const startNewGame = (req, res) => {
  const username = getUsername(req.cookies.sid);
  if (!username) return res.redirect("/");

  clearGameState(username);
  newGame(username);
  res.redirect("/");
};

const takenGuess = (req, res) => {
  const username = getUsername(req.cookies.sid);
  if (!username) return res.redirect("/");

  const { guess } = req.body;
  const result = makeGuess(username, guess);

  const message = result.message;

  return showHomePage(req, res, message);
};

module.exports = { showHomePage, login, logout, startNewGame, takenGuess };
