import { DeleteThread, GetThread, InsertThread } from "../db/thread.js";
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  const filter = req.query.id !== undefined ? `id=${req.query.id}` : "";

  GetThread(filter)
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

router.delete("/", (req, res) => {
  DeleteThread(req.body.id ? `id=${req.body.id}` : "")
    .then((result) => {
      res.send(result);

      console.log("성공적으로 thread 데이터를 삭제했습니다.");
    })
    .catch((error) => {
      res.send(error);

      console.log("성공적으로 thread 데이터를 삭제하지 못했습니다.");
      console.error(error);
    });
});

export default router;
