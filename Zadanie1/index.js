const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });
response.end('<div>Test</div>')
});

server.listen(5000, '127.0.0.1', () => {
  console.log('Server listening at port 5000')
})