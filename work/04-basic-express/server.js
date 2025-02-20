const express = require("express");
const app = express();
const PORT = 3000;

const chat = require("./chat");
const chatWeb = require("./chat-web");

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.send(chatWeb.chatPage(chat));
});

app.post("/chat", express.urlencoded({ extended: false }), (req, res) => {
  const { text, username } = req.body;
  if (text && username) {
    chat.addMessage({ sender: username, text });
  }
  res.redirect("/");
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
