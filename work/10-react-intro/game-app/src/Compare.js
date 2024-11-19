function Compare(guessWord, secretWord) {
  const wordCount = {};
  const guessCount = {};

  for (let i = 0; i < guessWord.length; i++) {
    const letter = guessWord[i].toUpperCase();
    wordCount[letter] = (wordCount[letter] || 0) + 1;
  }

  for (let i = 0; i < secretWord.length; i++) {
    const letter = secretWord[i].toUpperCase();
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

export default Compare;
