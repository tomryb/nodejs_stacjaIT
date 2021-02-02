const http = require('http');
const date = require('date-fns');
const fs = require('fs');
const _ = require('lodash')

import { add } from './add';
import { sub } from './sub'
import { response404Body } from './routes/404';
import { responseContactBody } from './routes/contact';
import { responseHomeBody } from './routes/home';
import { responseUsersBody } from './routes/users';

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
// const addResult = add(11, 12)
// const subResult = sub(167, 56)
//   response.writeHead(200, {
//     'Content-Type': 'text/html'
//   });
// response.end(`${addResult} test ${subResult}`)
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
// const server = http.createServer((request, response) => {
//   response.writeHead(200, {
//     'Content-Type': 'text/html'
//   });
//   switch (request.url) {
//     case '/': response.end(responseHomeBody); break
//     case '/contact': response.end(responseContactBody); break
//     case '/users': response.end(responseUsersBody); break
//     default: response.end(response404Body); break

//   }
// });
// server.listen(5000, '127.0.0.1', () => {
//   console.log('Server listening at port 5000')
// })

//zadanie8
// const server = http.createServer((request, response) => {
//   response.writeHead(200, {
//     'Content-Type': 'text/html'
//   });
//   switch (request.url) {
//     case '/': response.end(responseHomeBody); break
//     case '/contact':
//     fs.readFile('./static/contact.html', (err, page) => {
//       if (err) {
//         console.log(err);
//       }
//       response.end(page);
//     })
//     break;
//     case '/users': response.end(responseUsersBody); break
//     default: response.end(response404Body); break

//   }
// });
// server.listen(5000, '127.0.0.1', () => {
//   console.log('Server listening at port 5000')
// })

//zadanie9



const server = http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });
  switch (request.url) {
    case '/': response.end(responseHomeBody); break
    case '/contact':
      fs.readFile('./static/contact.html', (err, page) => {
        if (err) {
          console.log(err);
        }
        response.end(page);
      })
      break;
    case '/api/users': response.writeHead(200, {
      'Content-Type': 'application/json'
    });
      fs.readFile('./users.json', 'utf8', (err, data) => {
        const users = [];
        JSON.parse(data).map(user => users.push({ id: user.id, name: user.name }));
        if (err) {
          console.log(err);
        }
        else {
          response.writeHead(200, {
            'Content-Type': 'text/html'
          });
          const sortedArray = _.sortBy(users, ['name'])
          fs.writeFile('users2.json', JSON.stringify(sortedArray), (err) => {
            if (err) {
              console.log(err)
            }
            return;
          })
        }
      })
      // response.end(JSON.stringify(sortedArray));
    default: response.end(response404Body);

  }
});
server.listen(5000, '127.0.0.1', () => {
  console.log('Server listening at port 5000')
})