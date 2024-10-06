const chatWeb = {
  chatPage: function (chat) {
    return `
      <!doctype html>
      <html>
        <head>
          <title>Chat</title>
          <link rel="stylesheet" href="chat.css">
        </head>
        <body>
          <div id="chat-app">
            ${chatWeb.getUserList(chat)}
            ${chatWeb.getMessageList(chat)}
            ${chatWeb.getOutgoingSection(chat)}
          </div>
        </body>
      </html>
  `;
  },

  getMessageList: function (chat) {
    return (
      `<ol class="messages">` +
      chat.messages
        .map((message) => {
          const messageClass =
            message.sender === "Amit" ? "message-left" : "message-right";
          return `
            <li>
              <div class="message ${messageClass}"> <!-- 根据发送者显示在左侧或右侧 -->
                <div class="sender-info">
                  <img class="avatar" alt="avatar of ${
                    message.sender
                  }" src="images/avatar-${message.sender.toLowerCase()}.jpg"/>
                  <span class="username">${message.sender}</span>
                </div>
                <p class="message-text">${message.text}</p>
              </div>
            </li>
          `;
        })
        .join("") +
      `</ol>`
    );
  },
  getUserList: function (chat) {
    return (
      `<ul class="users">` +
      Object.values(chat.users)
        .map(
          (user) => `
      <li>
        <div class="user">
          <span class="username">${user}</span>
        </div>
      </li>
    `
        )
        .join("") +
      `</ul>`
    );
  },
  getOutgoingSection: function (chat) {
    return `
    <div class="outgoing">
      <form action="/chat" method="POST">
        <input type="hidden" name="username" value="Amit"/>
        <label for="to-send">Message:<input id="to-send" class="to-send" name="text" value=""/></label>
        <button type="submit">Send</button>
      </form>
    </div>
    `;
  },
};
module.exports = chatWeb;
