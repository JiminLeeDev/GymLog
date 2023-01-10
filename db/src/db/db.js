import db from "./config.js";

export async function GetThread(filter) {
  const query = `SELECT * FROM Thread ${filter ? `WHERE ${filter}` : ""}`;

  return await new Promise((resolve, reject) => {
    db.query(query, (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

export async function InsertThread(title, content) {
  if (title.trim().length === 0 || title.length > 20) {
    return new Promise((resolve, reject) => {
      return reject("제목은 공백일 수 없으며 20글자 이내여야 합니다.");
    });
  } else if (content.trim().length === 0) {
    return new Promise((resolve, reject) => {
      return reject("본문은 공백일 수 없습니다.");
    });
  } else {
    const query = `INSERT INTO Thread(title, content) VALUES("${title}", "${content}")`;

    return await new Promise((resolve, reject) => {
      db.query(query, (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
}
