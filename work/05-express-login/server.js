const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3000;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const {
  logoutUser,
  showHomePage,
  loginUser,
  updateWord,
} = require("./controllers/userController");

app.get("/", showHomePage);
app.post("/login", loginUser);
app.post("/update-word", updateWord);
app.post("/logout", logoutUser);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
