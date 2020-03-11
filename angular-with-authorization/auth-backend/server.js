const http = require('http');
const { userValidation, secretValidation } = require('./user-validation');
const PORT = 5000

const requestHandler = (request, response) => {
  const { method, url } = request;
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  response.setHeader('Access-Control-Allow-Headers', 'Authorization, content-type');

  if(url === '/login') {
    response.statusCode = 200;
    switch(method) {
      case 'POST':
        return userValidation(request, response);
      case 'OPTIONS':
      default:
        return response.end('');
    }
  } else if(url === '/secret-resource') {
    response.statusCode = 200;
    switch(method) {
      case 'GET':
        return secretValidation(request, response);
      case 'OPTIONS':
      default:
        return response.end('');
    }
  } else {
    response.statusCode = 404;
    response.end('');
  }
}

const server = http.createServer(requestHandler)

server.listen(PORT, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${PORT}`)
})
