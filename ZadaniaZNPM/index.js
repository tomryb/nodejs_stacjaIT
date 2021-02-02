const http = require('http');
const date = require('date-fns');
const fs = require('fs');
const _ = require('lodash')
import { add } from './add';

//Zadanie2
// const server = http.createServer((request, response) => {
//   const message = date.format(new Date(), 'yyyy-MM-dd')
//   response.writeHead(200, {
//     'Content-Type': 'text/html'
//   });
//   response.end(`${message} test`)
// });

// server.listen(5000, '127.0.0.1', () => {
//   console.log('Server listening at port 5000')
// })

//zadanie3
//instalacja nodemon + skrypt

//zadanie4

// const server = http.createServer((request, response) => {
//   const message = add(11, 12)
//   response.writeHead(200, {
//     'Content-Type': 'text/html'
//   });
//   response.end(`${message} test`)
// });

// server.listen(5000, '127.0.0.1', () => {
//   console.log('Server listening at port 5000')
// })

//zadanie5

// fs.readFile('./text.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.log(err)
//     return;
//   }
//   console.log(data)
// })


// const server = http.createServer((request, response) => {
//   fs.readFile('./users.json', 'utf8', (err, data) => {
//     const users = [];
//     JSON.parse(data).map(user => users.push(user));
//     if (err) {
//       console.log(err);
//     }
//     else {
//       console.log(users)
//       response.writeHead(200, {
//         'Content-Type': 'text/html'
//       });
//       const renderUsers = users.map(singleUser => `<div>${singleUser.name}</div>`)
//       response.end(`
//       <h2>Lista userów</h2>
//       <div>${renderUsers}</div>
//       `)
//     }
//   })
// });
// server.listen(5000, '127.0.0.1', () => {
//   console.log('Server listening at port 5000')
// })

//zadanie6
// const server = http.createServer((request, response) => {
//   fs.readFile('./users.json', 'utf8', (err, data) => {
//     const users = [];
//     JSON.parse(data).map(user => users.push({ id: user.id, name: user.name }));
//     if (err) {
//       console.log(err);
//     }
//     else {
//       response.writeHead(200, {
//         'Content-Type': 'text/html'
//       });
//       const sortedArray = _.sortBy(users, ['name'])
//       fs.writeFile('users2.json', JSON.stringify(sortedArray), (err) => {
//         if (err) {
//           console.log(err)
//         }
//         return;
//       })
//     }
//   })
// });
// server.listen(5000, '127.0.0.1', () => {
//   console.log('Server listening at port 5000')
// })

//zadanie7
const server = http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });
  if (request.url === '/') {
    response.end("eloelo")
  }
  else if (request.url === '/contact') {
    response.end("contact")
  }
  else if (request.url === '/users') {
    response.end("typy")
  }
  else if (request.url === '/about') {
    response.end("o typach")
  }
  else {
    response.writeHead(404, {
      'Content-Type': 'text/html'
    })
    response.end()
  }
});
server.listen(5000, '127.0.0.1', () => {
  console.log('Server listening at port 5000')
})
