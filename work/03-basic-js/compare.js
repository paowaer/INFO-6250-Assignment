"use strict";
/* DO NOT MODIFY EXCEPT WHERE ALLOWED */
module.exports = compare; // DO NOT MODIFY - USED FOR TESTING

function compare(word, guess) {
  // DO NOT MODIFY

  /* YOU MAY MODIFY THE LINES BELOW */

  const wordCount = {};
  const guessCount = {};

  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toUpperCase();
    wordCount[letter] = (wordCount[letter] || 0) + 1;
  }

  for (let i = 0; i < guess.length; i++) {
    const letter = guess[i].toUpperCase();
    guessCount[letter] = (guessCount[letter] || 0) + 1;
  }

  let matchCount = 0;
  for (const letter in wordCount) {
    if (guessCount[letter]) {
      matchCount += Math.min(wordCount[letter], guessCount[letter]);
    }
  }

  return matchCount;
}
