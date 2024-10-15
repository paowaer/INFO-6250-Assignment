const { randomUUID } = require("crypto");

const sessions = {};

const createSession = (username) => {
  const sid = randomUUID();
  sessions[sid] = { username };
  return sid;
};

const getUsernameBySessionId = (sid) => sessions[sid]?.username || null;

const isValidSession = (sid) => sid in sessions;

const deleteSession = (sid) => delete sessions[sid];

module.exports = {
  createSession,
  getUsernameBySessionId,
  isValidSession,
  deleteSession,
};
