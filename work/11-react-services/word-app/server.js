import express from "express";
import cookieParser from "cookie-parser";
import { makeWordList } from "./words.js";
import sessions from "./sessions.js";
import users from "./users.js";

const app = express();
const PORT = 3000;

app.use(cookieParser());
app.use(express.json());
app.use(express.static("./dist"));

app.get("/api/session", (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : "";
  if (!sid || !users.isValid(username)) {
    res.status(401).json({ error: "auth-missing" });
    return;
  }
  res.json({ username });
});

app.post("/api/session", (req, res) => {
  const { username } = req.body;

  if (!users.isValid(username)) {
    res.status(400).json({ error: "required-username" });
    return;
  }

  if (username === "dog") {
    res.status(403).json({ error: "auth-insufficient" });
    return;
  }

  const sid = sessions.addSession(username);
  const existingUserData = users.getUserData(username);

  if (!existingUserData) {
    users.addUserData(username, makeWordList());
  }

  res.cookie("sid", sid);
  res.json(users.getUserData(username).getWords());
});

app.delete("/api/session", (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : "";

  if (sid) {
    res.clearCookie("sid");
  }

  if (username) {
    sessions.deleteSession(sid);
  }

  res.json({ username });
});

app.get("/api/words", (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : "";
  if (!sid || !users.isValid(username)) {
    res.status(401).json({ error: "auth-missing" });
    return;
  }

  res.json(users.getUserData(username).getWords());
});

app.post("/api/words", (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : "";
  if (!sid || !users.isValid(username)) {
    res.status(401).json({ error: "auth-missing" });
    return;
  }

  const { task } = req.body;
  if (!task) {
    res.status(400).json({ error: "required-task" });
    return;
  }
  const wordList = users.getUserData(username);
  const id = wordList.addWord(task);
  res.json(wordList.getWord(id));
});

app.get("/api/words/:id", (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : "";
  if (!sid || !users.isValid(username)) {
    res.status(401).json({ error: "auth-missing" });
    return;
  }
  const wordList = users.getUserData(username);
  const { id } = req.params;
  if (!wordList.contains(id)) {
    res
      .status(404)
      .json({ error: `noSuchId`, message: `No word with id ${id}` });
    return;
  }
  res.json(wordList.getWord(id));
});

app.put("/api/words/:id", (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : "";
  if (!sid || !users.isValid(username)) {
    res.status(401).json({ error: "auth-missing" });
    return;
  }
  const wordList = users.getUserData(username);
  const { id } = req.params;
  const { task, done = false } = req.body;

  if (!task) {
    res.status(400).json({ error: "required-task" });
    return;
  }
  if (!wordList.contains(id)) {
    res
      .status(404)
      .json({ error: `noSuchId`, message: `No word with id ${id}` });
    return;
  }
  wordList.updateWord(id, { task, done });
  res.json(wordList.getWord(id));
});

app.patch("/api/words/:id", (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : "";
  if (!sid || !users.isValid(username)) {
    res.status(401).json({ error: "auth-missing" });
    return;
  }
  const { id } = req.params;
  const { task, done } = req.body;
  const wordList = users.getUserData(username);
  if (!wordList.contains(id)) {
    res
      .status(404)
      .json({ error: `noSuchId`, message: `No word with id ${id}` });
    return;
  }
  wordList.updateWord(id, { task, done });
  res.json(wordList.getWord(id));
});

app.delete("/api/words/:id", (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : "";
  if (!sid || !users.isValid(username)) {
    res.status(401).json({ error: "auth-missing" });
    return;
  }
  const { id } = req.params;
  const wordList = users.getUserData(username);
  const exists = wordList.contains(id);
  if (exists) {
    wordList.deleteWord(id);
  }
  res.json({
    message: exists ? `word ${id} deleted` : `word ${id} did not exist`,
  });
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
