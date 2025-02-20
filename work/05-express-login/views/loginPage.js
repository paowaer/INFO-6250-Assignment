const loginPage = () => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Login</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <div class="container">
        <h1>Login</h1>
        <form action="/login" method="POST">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username">
          <button type="submit">Login</button>
        </form>
      </div>
    </body>
    </html>
  `;

module.exports = loginPage;
