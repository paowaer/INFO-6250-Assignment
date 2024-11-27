import { randomUUID as uuid } from "crypto";

export function makeWordList() {
  const wordList = {};
  const words = {};

  wordList.contains = function contains(id) {
    return !!words[id];
  };

  wordList.getWords = function getWords() {
    return words;
  };

  wordList.addWord = function addWord(task) {
    const id = uuid();
    words[id] = {
      id,
      task,
      done: false,
    };
    return id;
  };

  wordList.getWord = function getWord(id) {
    return words[id];
  };

  wordList.updateWord = function updateWord(id, word) {
    words[id].done = word.done ?? words[id].done;
    words[id].task = word.task || words[id].task;
  };

  wordList.deleteWord = function deleteWord(id) {
    delete words[id];
  };

  return wordList;
}
