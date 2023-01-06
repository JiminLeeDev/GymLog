import http from "http";

const port = 80;
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello, World!</h1>");
  res.end();
});

server.listen(port, () => {
  console.log(`서버가 ${port}에서 실행되고 있습니다.`);
});
