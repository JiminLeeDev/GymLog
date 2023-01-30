import db from "./config.js";
import { get_date_string } from "../date_formater.js";

export async function GetThread(filter) {
  const query = `SELECT * FROM Thread ${filter ? `WHERE ${filter}` : ""}`;

  return await new Promise((resolve, reject) => {
    db.query(query, (error, results, fields) => {
      if (error) {
        reject({
          success: false,
          errorMessage:
            error.sqlMessage === "Unknown column 'undefined' in 'where clause'"
              ? "인식할 수 없는 id 값입니다."
              : "성공적으로 thread를 가져올 수 없었습니다.",
        });
      } else if (results.length === 0) {
        reject({
          success: false,
          errorMessage: "요청하신 id에 해당하는 thread를 가져올 수 없었습니다.",
        });
      } else {
        resolve({ success: true, results });
      }
    });
  });
}

export async function InsertThread(title, content, writer) {
  if (title.trim().length === 0 || title.length > 20) {
    return await new Promise((resolve, reject) =>
      reject({
        success: false,
        errorMessage: "제목은 공백일 수 없으며 20글자 이내여야 합니다.",
      })
    );
  } else if (content.trim().length === 0) {
    return await new Promise((resolve, reject) =>
      reject({
        success: false,
        errorMessage: "본문은 공백일 수 없습니다.",
      })
    );
  } else if (writer.trim().length === 0 || writer.length > 20) {
    return await new Promise((resolve, reject) =>
      reject({
        success: false,
        errorMessage: "작성자명은 공백일 수 없으며 20글자 이내여야 합니다.",
      })
    );
  } else {
    const date = get_date_string(new Date());

    const query = `INSERT INTO Thread(title, content, date, writer) VALUES("${title}", "${content}", "${date}", "${writer}")`;

    return await new Promise((resolve, reject) => {
      db.query(query, (error, results, fields) => {
        if (error) {
          reject({
            errorMessage: "성공적으로 thread를 삽입할 수 없었습니다.",
          });
        } else {
          resolve({
            success: true,
            results,
          });
        }
      });
    });
  }
}

export async function DeleteThread(filter) {
  if (!filter) {
    return await new Promise((resolve, reject) =>
      reject({
        success: false,
        errorMessage:
          "선택하신 게시글이 thread 데이터를 없어 삭제할 수 없습니다.",
      })
    );
  } else {
    const query = `DELETE FROM Thread WHERE ${filter}`;

    return await new Promise((resolve, reject) => {
      db.query(query, (error, results, fields) => {
        if (error) {
          reject({
            success: false,
            errorMessage: "성공적으로 게시글을 삭제할 수 없었습니다.",
          });
        } else {
          resolve({
            success: true,
            results,
          });
        }
      });
    });
  }
}
