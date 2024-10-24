"use strict";

const express = require("express");
const cookieParser = require("cookie-parser");

const {
  showHomePage,
  login,
  logout,
  startNewGame,
  takenGuess,
} = require("./controllers/gameController");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));

app.get("/", showHomePage);
app.post("/login", login);
app.post("/logout", logout);
app.post("/new-game", startNewGame);
app.post("/guess", takenGuess);

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
