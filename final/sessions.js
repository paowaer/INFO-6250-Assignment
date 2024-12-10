import { randomUUID as uuid } from "crypto";

const sessions = {};

function createSession(username) {
  const sid = uuid();
  sessions[sid] = { username };
  return sid;
}

function getSessionUser(sid) {
  return sessions[sid] ? sessions[sid].username : null;
}

function deleteSession(sid) {
  delete sessions[sid];
}

export default {
  createSession,
  getSessionUser,
  deleteSession,
};
