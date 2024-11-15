const uuid = require("crypto").randomUUID;
const sessions = {};

function addSession(username) {
  for (const sid in sessions) {
    if (sessions[sid].username === username) {
      deleteSession(sid);
    }
  }
  const sid = uuid();
  sessions[sid] = { username };
  return sid;
}

function getSessionUser(sid) {
  return sessions[sid]?.username;
}

function deleteSession(sid) {
  delete sessions[sid];
}

function getAllCurrentUsers() {
  const uniqueUsers = {};
  Object.values(sessions).forEach((session) => {
    uniqueUsers[session.username] = {
      username: session.username,
      imgUrl: `http://placehold.co/150x150?text=${encodeURIComponent(
        session.username
      )}`,
    };
  });
  return Object.values(uniqueUsers);
}

module.exports = {
  addSession,
  getSessionUser,
  deleteSession,
  getAllCurrentUsers,
};
