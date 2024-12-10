import cats from "./cats.js";
import express from "express";
import users from "./users.js";
import sessions from "./sessions.js";
import cookieParser from "cookie-parser";

const PORT = 3000;
const app = express();
app.use(express.json()).use(cookieParser()).use(express.static("./dist"));

app.get("/api/session", (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : "";
  if (!sid || !users.isValid(username)) {
    res.status(401).json({ error: "auth-missing" });
    return;
  }
  res.json({ username, ...users.getUserProfile(username) });
});

app.post("/api/session", (req, res) => {
  const { username } = req.body;
  if (!users.isValid(username)) {
    res.status(400).json({ error: "required-username" });
    return;
  }
  if (!users.isPermitted(username)) {
    res.status(400).json({ error: "auth-insufficient" });
    return;
  }
  const userProfile = users.getUserProfile(username);
  if (!userProfile) {
    res.status(400).json({ error: "user-not-found" });
    return;
  }
  const sid = sessions.createSession(username);
  res.cookie("sid", sid);
  res.json({ username: username, isAdmin: userProfile.isAdmin });
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
  res.json({ message: "Logged out successfully." });
});

app.post("/api/users", (req, res) => {
  const { username } = req.body;
  if (!users.isValid(username) || !users.isPermitted(username)) {
    res.status(400).json({ error: "invalid-or-forbidden-username" });
    return;
  }
  if (users.getUserProfile(username)) {
    res.status(400).json({ error: "username-already-exists" });
    return;
  }
  const userAdded = users.addUserProfile({ username });
  if (!userAdded) {
    res.status(500).json({ error: "error-registering-user" });
    return;
  }
  const sid = sessions.createSession(username);
  res.cookie("sid", sid);
  res
    .status(201)
    .json({ message: "User registered successfully.", data: userAdded });
});

app.get("/api/users", (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : null;

  if (!username) {
    res.status(401).json({ error: "user-not-authenticated" });
    return;
  }

  const userProfile = users.getUserProfile(username);
  if (!userProfile) {
    res.status(404).json({ error: "user-not-found" });
    return;
  }
  res.json(userProfile);
});

app.post("/api/usersContact", (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : null;

  if (!username) {
    res.status(401).json({ error: "user-not-authenticated" });
    return;
  }

  const { email, phone, address } = req.body;
  const userProfile = users.getUserProfile(username);
  if (userProfile) {
    userProfile.email = email || userProfile.email;
    userProfile.phone = phone || userProfile.phone;
    userProfile.address = address || userProfile.address;
    res.json({ message: "Contact information updated successfully." });
  } else {
    res.status(404).json({ error: "user-not-found" });
  }
});

app.put("/api/users", (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : null;

  if (!username) {
    res.status(401).json({ error: "user-not-authenticated" });
    return;
  }

  const { catId, action } = req.body;
  if (action === "reserve") {
    const cat = cats.getCat(catId);
    if (!cat || !cat.isAvailable) {
      res.status(400).json({ error: "cat-not-available-for-reservation" });
      return;
    }
    const success = cats.reserveCat(catId, { username });
    if (success) {
      users.addUserReservation(username, catId, { username });
      res.json({ message: "Cat reserved successfully." });
    } else {
      res.status(400).json({ error: "unable-to-reserve-cat" });
    }
  } else if (action === "cancel") {
    const success = cats.unreserveCat(catId);
    if (success) {
      users.removeUserReservation(username, catId);
      res.json({ message: "Reservation cancelled successfully." });
    } else {
      res.status(400).json({ error: "unable-to-cancel-reservation" });
    }
  } else {
    res.status(400).json({ error: "invalid-action" });
  }
});

app.get("/api/cats", (req, res) => {
  const allCats = cats.getAllCats();
  res.json(allCats);
});

app.post("/api/cats", (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : null;
  const user = username ? users.getUserProfile(username) : null;

  if (!user || !user.isAdmin) {
    res.status(403).json({ error: "unauthorized-admin-access-required" });
    return;
  }

  const success = cats.addCat(req.body);
  if (success) {
    res.status(201).json({ message: "Cat added successfully." });
  } else {
    res.status(400).json({ error: "cat-already-exists" });
  }
});

app.post("/api/updateCat", (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : null;
  const user = username ? users.getUserProfile(username) : null;

  if (!user || !user.isAdmin) {
    res.status(403).json({ error: "unauthorized-admin-access-required" });
    return;
  }

  const success = cats.updateCat(req.body);
  if (success) {
    res.status(201).json({ message: "Cat update successfully." });
  }
});

app.put("/api/cats", (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : null;

  if (!username) {
    res.status(401).json({ error: "user-not-authenticated" });
    return;
  }

  const { catId, action } = req.body;
  if (action === "reserve") {
    const success = cats.reserveCat(catId, { username });
    if (success) {
      res.json({ message: "Cat reserved successfully." });
    } else {
      res.status(400).json({ error: "cat-already-reserved" });
    }
  } else if (action === "cancel") {
    const success = cats.unreserveCat(catId);
    if (success) {
      res.json({ message: "Reservation cancelled successfully." });
    } else {
      res.status(400).json({ error: "unable-to-cancel-reservation" });
    }
  } else {
    res.status(400).json({ error: "invalid-action" });
  }
});

app.delete("/api/cats", (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : null;
  const user = username ? users.getUserProfile(username) : null;

  if (!user || !user.isAdmin) {
    res.status(403).json({ error: "unauthorized-admin-access-required" });
    return;
  }

  const { catId } = req.body;
  const success = cats.deleteCat(catId);
  if (success) {
    res.json({ message: "Cat deleted successfully." });
  } else {
    res.status(400).json({ error: "cat-not-found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
