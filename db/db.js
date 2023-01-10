import { createConnection } from "mysql";

const connection = createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "GymLog",
});

connection.connect();

export async function GetPost() {
  const query = "SELECT * FROM Post";

  return await new Promise((resolve, reject) => {
    connection.query(query, (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}
