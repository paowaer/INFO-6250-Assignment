const profiles = {};

const getStoredWord = (username) => profiles[username]?.storedWord || "";

const updateStoredWord = (username, newWord) => {
  if (!profiles[username]) {
    profiles[username] = { storedWord: "" };
  }
  profiles[username].storedWord = newWord;
};

module.exports = {
  getStoredWord,
  updateStoredWord,
};
