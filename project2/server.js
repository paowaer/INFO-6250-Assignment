const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3000;

const messages = require("./messages");
const sessions = require("./sessions");
const users = require("./users");

app.use(cookieParser());
app.use(express.static("./public"));
app.use(express.json());

app.get("/api/v1/session", (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : "";

  if (!sid || !users.isValid(username)) {
    res.status(401).json({ error: "auth-missing" });
    return;
  }
  res.json({ username });
});

app.post("/api/v1/session", (req, res) => {
  const { username } = req.body;

  if (!users.isValid(username)) {
    res.status(400).json({ error: "required-username" });
    return;
  }

  if (!users.isPermitted(username)) {
    res.status(403).json({ error: "auth-insufficient" });
    return;
  }

  const sid = sessions.addSession(username);
  res.cookie("sid", sid);
  res.json(messages.getMessages());
});

app.delete("/api/v1/session", (req, res) => {
  const sid = req.cookies.sid;
  if (sid) {
    res.clearCookie("sid");
    sessions.deleteSession(sid);
  }
  res.json({ message: "Logged out" });
});

app.get("/api/v1/users", (req, res) => {
  const currentUsers = sessions.getAllCurrentUsers();
  res.json(currentUsers);
});

app.get("/api/v1/messages", (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : "";

  if (!sid || !users.isValid(username)) {
    res.status(401).json({ error: "auth-missing" });
    return;
  }

  res.json(messages.getMessages());
});

app.post("/api/v1/messages", (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : "";

  if (!sid || !users.isValid(username)) {
    res.status(401).json({ error: "auth-missing" });
    return;
  }

  const { text } = req.body;
  if (!text) {
    res.status(400).json({ error: "required-message" });
    return;
  }

  const message = messages.addMessage(username, text);
  res.json(message);
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
