const a = 5;
const b = 6;
const add = () => b ? a + b : a;

const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });
  response.end(`<div>` + add(a, b) + `</div>`)
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Server listening at port 8000')
})