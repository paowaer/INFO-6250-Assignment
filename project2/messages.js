const uuid = require("crypto").randomUUID;

function makeMessageList() {
  const messages = {};

  function addMessage(username, text) {
    const id = uuid();
    const imgUrl = `http://placehold.co/150x150?text=${encodeURIComponent(
      username
    )}`;
    messages[id] = {
      id,
      text,
      username,
      imgUrl,
      timestamp: new Date(),
    };
    return messages[id];
  }

  function getMessages() {
    return Object.values(messages);
  }

  function deleteMessage(id) {
    delete messages[id];
  }

  return {
    addMessage,
    getMessages,
    deleteMessage,
  };
}

module.exports = makeMessageList();
