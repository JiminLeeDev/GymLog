import express from "express";
import threadRouter from "./routers/thread.js";
import cors from "cors";

const app = express();
const port = process.env.REACT_APP_DB_SERVER_PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/thread", threadRouter);

app.listen(port, () => {
  console.log(
    `${port} 포트에서 서버가 실행되고 있습니다. 주소: ${process.env.REACT_APP_DB_SERVER_ADDRESS}:${port}`
  );
});

app.get("/", (req, res) => {
  console.log("성공적으로 index 데이터를 전송했습니다.");

  res.send("index page입니다.");
});
