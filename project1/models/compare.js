"use strict";

function compare(targetWord, userGuess) {
  const targetCount = {};
  const guessCount = {};

  for (let i = 0; i < targetWord.length; i++) {
    const char = targetWord[i].toLowerCase();
    targetCount[char] = (targetCount[char] || 0) + 1;
  }

  for (let i = 0; i < userGuess.length; i++) {
    const char = userGuess[i].toLowerCase();
    guessCount[char] = (guessCount[char] || 0) + 1;
  }

  let matchCount = 0;
  for (const char in targetCount) {
    if (guessCount[char]) {
      matchCount += Math.min(targetCount[char], guessCount[char]);
    }
  }

  return matchCount;
}

module.exports = compare;
