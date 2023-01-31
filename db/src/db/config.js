import { createConnection } from "mysql";

const connection = createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "GymLog",
  dateStrings: "date",
});

console.log(process.env.DB_HOST);
connection.connect();

export default connection;
