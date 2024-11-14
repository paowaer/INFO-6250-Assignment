const users = {};

function isValid(username) {
  let isValid = true;
  isValid = !!username && username.trim();
  isValid = isValid && username.match(/^[A-Za-z0-9_]+$/);
  return isValid;
}

function isPermitted(username) {
  return username !== "dog";
}

function getUserMessage(username) {
  return users[username];
}

function addUserMessage(username, message) {
  users[username] = message;
}

module.exports = {
  isValid,
  isPermitted,
  getUserMessage,
  addUserMessage,
};
