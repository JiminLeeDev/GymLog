import { GetThread } from "../db.js";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  GetThread()
    .then((result) => {
      res.send(result);

      console.log("성공적으로 thread 데이터를 전송했습니다.");
    })
    .catch((error) => {
      res.send(error + "erroerd");

      console.log("성공적으로 thread 데이터를 전송하지 못했습니다.");
      console.error(error);
    });
});

export default router;
