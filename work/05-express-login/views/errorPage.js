const errorPage = (message, statusCode) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Error ${statusCode}</title>
        <link rel="stylesheet" href="/style.css">
    </head>
    <body>
        <div class="container">
        <h1>Error ${statusCode}</h1>
        <p>${message}</p>
        <a href="/">Go Back to Login</a>
        </div>
    </body>
    </html>
    `;

module.exports = errorPage;
