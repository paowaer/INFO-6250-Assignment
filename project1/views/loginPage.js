"use strict";

const loginPage = (message) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link rel="stylesheet" href="/styles.css">
  </head>
  <body>
    <div class="container">
      <div class="login-panel">
        <header>
          <h1>Login</h1>
        </header>
        ${
          message
            ? `<div class="error-message">${message}</div>`
            : "Please enter your username"
        }
        <div>
          <form action="/login" method="POST" class="login-form">
            <label for="username">Username:</label>
            <input type="text" name="username" id="username">
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  </body>
  </html>
`;

module.exports = loginPage;
