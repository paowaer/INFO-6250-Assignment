"use strict";

const { randomUUID } = require("crypto");

const sessions = {};

const createSession = (username) => {
  const sid = randomUUID();
  sessions[sid] = username;
  return sid;
};

const getUsername = (sid) => sessions[sid];

const deleteSession = (sid) => delete sessions[sid];

module.exports = {
  createSession,
  getUsername,
  deleteSession,
};
