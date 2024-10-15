const {
  createSession,
  getUsernameBySessionId,
  isValidSession,
  deleteSession,
} = require("../models/sessionModel");

const { getStoredWord, updateStoredWord } = require("../models/userDataModel");

const dataPage = require("../views/dataPage");
const loginPage = require("../views/loginPage");
const errorPage = require("../views/errorPage");

const loginUser = (req, res) => {
  const username = req.body.username.trim();

  if (!username || !/^[a-zA-Z0-9]+$/.test(username)) {
    res.status(400).send(errorPage("Invalid Username", 400));
    return;
  }

  if (username === "dog") {
    res.status(403).send(errorPage("User Not Allowed", 403));
    return;
  }

  const sid = createSession(username);
  res.cookie("sid", sid, { httpOnly: true });
  res.redirect("/");
};

const showHomePage = (req, res) => {
  const sid = req.cookies.sid;
  const username = isValidSession(sid) ? getUsernameBySessionId(sid) : null;

  if (username) {
    const storedWord = getStoredWord(username);
    res.send(dataPage(username, storedWord));
  } else {
    res.send(loginPage());
  }
};

const updateWord = (req, res) => {
  const sid = req.cookies.sid;
  const username = isValidSession(sid) ? getUsernameBySessionId(sid) : null;

  if (username) {
    updateStoredWord(username, req.body.storedWord);
    res.redirect("/");
  } else {
    res.clearCookie("sid");
    res.redirect("/");
  }
};

const logoutUser = (req, res) => {
  const sid = req.cookies.sid;

  if (isValidSession(sid)) {
    deleteSession(sid);
    res.clearCookie("sid");
  }

  res.redirect("/");
};

module.exports = {
  loginUser,
  showHomePage,
  updateWord,
  logoutUser,
};
