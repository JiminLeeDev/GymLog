import http from "http";
import fs from "fs";

const port = 80;
const server = http.createServer((req, res) => {
  const fileName = "index.html";
  const path = "./";

  try {
    fs.readFile(path + fileName, (error, doc) => {
      if (error) {
        console.error(
          error + `\n${fileName}은 성공적으로 전송되지 못했습니다.`
        );

        res.writeHead(400, { "Content-Type": "text/html" });
        res.end(error.message);
      } else {
        console.log(`${fileName}은 성공적으로 전송되었습니다.`);

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(doc);
      }
    });
  } catch (error) {
    console.error(error + `\n${fileName}은 성공적으로 전송되지 못했습니다.`);

    res.writeHead(400, { "Content-Type": "text/html" });
    res.end(error.message);
  }
});

server.listen(port, () => {
  console.log(`서버가 ${port}에서 실행되고 있습니다.`);
});
