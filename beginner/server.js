const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  // 头信息就是发送数据之外的一些额外数据，在write之前。

  res.setHeader('Content-Type', 'text/html');

  res.write("<h1>NodeJS</h1>");
  res.end('Hello World---qiuyanlong--\n'); //也可以合着调用write
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
