const dataPage = (username, storedWord) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Data</title>
    <link rel="stylesheet" href="/style.css">
  </head>
  <body>
    <div class="container">
      <h1>Hi, ${username}!</h1>

      <div class="current-word-section">
        <p>Current Stored Word:</p>
        <span class="current-stored-word">${storedWord}</span>
      </div>

      <div class="form-section">
        <form action="/update-word" method="POST">
          <label for="storedWord">New Stored Word:</label>
          <input 
            type="text" 
            id="storedWord" 
            name="storedWord" 
            value="${storedWord}" 
          >
          <button type="submit">Update</button>
        </form>

        <form action="/logout" method="POST">
          <button type="submit">Logout</button>
        </form>
      </div>
    </div>
  </body>
  </html>
`;

module.exports = dataPage;
