import { createConnection } from "mysql";

const connection = createConnection({
  host: process.env.REACT_APP_DB_HOST,
  user: process.env.REACT_APP_DB_USER,
  password: process.env.REACT_APP_DB_PASSWORD,
  database: "GymLog",
  dateStrings: "date",
});

connection.connect();

export default connection;
