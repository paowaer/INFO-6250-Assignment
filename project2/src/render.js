function renderApp({ state, appEl }) {
  appEl.innerHTML = `
    <main class="chat-container">
      
      <h1>Chatty Cat</h1>
      
      ${generateStatusHtml(state)}
      ${generateLoginHtml(state)}
      
      ${
        state.isLoggedIn
          ? `
          <div class="controls-row">
            <button class="controls__logout">Logout</button>
            <button class="controls__refresh">Refresh</button>
          </div>
          `
          : ""
      }
      ${
        state.isLoggedIn
          ? `
          <div class="content-row">
            <div class="users-column">
            <h2>Active Cats</h2><div class="users-container">${generateUserListHtml(
              state
            )}</div>
              </div>
              <div class="messages-column">
            <h2>Meows</h2><div class="messages-container">${generateMessagesHtml(
              state
            )}</div>
              </div>
          </div>`
          : ""
      }
      ${state.isLoggedIn ? generateInputHtml() : ""}
    </main>
  `;
}

function renderUsers({ state }) {
  const usersContainer = document.querySelector(".users-container");
  if (usersContainer) {
    usersContainer.innerHTML = generateUserListHtml(state);
  }
}

function renderMessages({ state }) {
  const messagesContainer = document.querySelector(".messages-container");
  if (state.isMessagePending) {
    if (messagesContainer) {
      messagesContainer.innerHTML = `
        <div class="message__waiting">
          <p>Loading messages...</p> 
        </div>
      `;
    }
    return;
  }

  if (messagesContainer) {
    messagesContainer.innerHTML = generateMessagesHtml(state);
  }
}

function generateStatusHtml(state) {
  return `<div class="status">${state.error}</div>`;
}

function generateLoginHtml(state) {
  if (state.isLoginPending) {
    return `<div class="login__waiting">Loading user...</div>`;
  }
  if (state.isLoggedIn) {
    return ``;
  }
  return `
    <div class="login">
      <form class="login__form" action="#login">
        <label>
          <span>Username:</span>
          <input class="login__username" value="">
        </label>
        <button class="login__button" type="submit">Login</button>
        
      </form>
    </div>
  `;
}

function generateUserListHtml(state) {
  return Object.values(state.users)
    .map(
      (user) => `
    <li class="user">
      <img src="${user.imgUrl}" alt="${user.username}'s avatar" class="avatar" />
      <span class="username">${user.username}</span>
    </li>
  `
    )
    .join("");
}

function generateMessagesHtml(state) {
  return `
    <ul class="messages">
      ${Object.values(state.messages)
        .map(
          (msg) => `
          <li class="message">
            <div class="sender-info">
              <img src="${msg.imgUrl}" alt="${msg.username}'s avatar" class="avatar">
              <span class="username">${msg.username}</span>
            </div>
            <div class="message-text">${msg.text}</div>
          </li>
        `
        )
        .join("")}
    </ul>
  `;
}

function generateInputHtml() {
  return `
    <form class="add__form"> 
      <input type="text" class="add__message" placeholder="Type a message">
      <button type="submit">Send</button>
    </form>
  `;
}

export { renderApp, renderUsers, renderMessages };
