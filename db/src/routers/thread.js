import { GetThread, InsertThread } from "../db/db.js";
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  GetThread()
    .then((result) => {
      res.send(result);

      console.log("성공적으로 thread 데이터를 전송했습니다.");
    })
    .catch((error) => {
      res.send(error);

      console.log("성공적으로 thread 데이터를 전송하지 못했습니다.");
      console.error(error);
    });
});

router.post("/", (req, res) => {
  InsertThread(req.body.title, req.body.content, req.body.writer)
    .then((result) => {
      res.send(result);

      console.log("성공적으로 thread 데이터를 삽입했습니다.");
    })
    .catch((error) => {
      res.send(error);

      console.log("성공적으로 thread 데이터를 삽입하지 못했습니다.");
      console.error(error);
    });
});

export default router;
