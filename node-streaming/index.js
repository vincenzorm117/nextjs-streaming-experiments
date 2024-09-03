const http = require('http');

const server = http.createServer((req, res) => {
  // Set the response headers to use chunked transfer encoding
  res.writeHead(200, {
    'Content-Type': 'text/html', // Set content type to HTML
    'Transfer-Encoding': 'chunked'
  });

  // Send the initial HTML content
  const initialHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Streaming Example</title>
    </head>
    <body>
      <h1 id="headline">Hello, ____</h1>
      <!-- The script below will dynamically update the headline after 5 seconds -->
      <script>
        console.log('Initial HTML received.');
      </script>
    </body>
    </html>
  `;
  
  // Send the initial HTML chunk
  res.write(initialHTML);

  // Simulate a 5-second delay before sending the JavaScript
  setTimeout(() => {
    const scriptChunk = `
      <script>
        console.log('Updating headline to "Hello, World".');
        document.getElementById('headline').textContent = 'Hello, World';
      </script>
    `;
    
    // Send the JavaScript to change the headline
    res.write(scriptChunk);

    // End the response after sending the JavaScript
    res.end();
    console.log('JavaScript chunk sent and response ended.');
  }, 5000); // 5-second delay
});

// Start the server
server.listen(3002, () => {
  console.log('Server running at http://localhost:3000/');
});