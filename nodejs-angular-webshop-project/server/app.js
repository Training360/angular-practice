const http = require('http');
const path = require('path');
const port = 3210;
const GetHandler = require('./module/getHandler');
const PostHandler = require('./module/postHandler');

const server = http.createServer( (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  switch( req.method.toLowerCase() ) {
    case 'get': new GetHandler(req, res);
      break;
    case 'post': new PostHandler(req, res);
      break;
    default: res.end('Invalid method');
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port: ${port}.`);
});
