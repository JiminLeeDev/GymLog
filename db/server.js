import express from "express";
import { GetPost } from "./db.js";

const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(
    `${port} 포트에서 서버가 실행되고 있습니다. 주소: http://localhost:${port}`
  );
});

app.get("/", (req, res) => {
  console.log("성공적으로 index 데이터를 전송했습니다.");

  res.send("index page입니다.");
});

app.get("/post", (req, res) => {
  GetPost()
    .then((result) => {
      res.send(result);

      console.log("성공적으로 post 데이터를 전송했습니다.");
    })
    .catch((error) => {
      res.send(error + "erroerd");

      console.log("성공적으로 post 데이터를 전송하지 못했습니다.");
      console.error(error);
    });
});
