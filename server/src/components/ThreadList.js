import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";

function App() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    console.log(process.env);
    fetch(
      `${process.env.REACT_APP_DB_SERVER_ADDRESS}:${process.env.REACT_APP_DB_SERVER_PORT}/thread`
    )
      .then((threads) => threads.json())
      .then((threads) => setThreads(threads.success ? threads.results : []));
  }, []);

  return (
    <Paper sx={{ padding: "2%", margin: "2%" }}>
      {threads.length > 0 ? (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {["id", "제목", "작성자", "작성일", ""].map((name) => (
                  <TableCell key={name} align="right">
                    {name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {threads.map((thread) => (
                <TableRow key={thread.id}>
                  <TableCell align="right">{thread.id}</TableCell>
                  <TableCell
                    align="right"
                    onClick={() => {
                      window.location.href = `/threads/${thread.id}`;
                    }}
                    sx={{
                      cursor: "pointer",
                    }}
                  >
                    {thread.title}
                  </TableCell>
                  <TableCell align="right">{thread.writer}</TableCell>
                  <TableCell align="right">{thread.date}</TableCell>
                  <TableCell align="right">
                    <Button
                      onClick={() =>
                        fetch(
                          `${process.env.REACT_APP_DB_SERVER_ADDRESS}:${process.env.REACT_APP_DB_SERVER_PORT}/thread`,
                          {
                            method: "delete",
                            body: JSON.stringify({
                              id: thread.id,
                            }),
                            headers: {
                              "Content-Type": "application/json",
                            },
                          }
                        ).then(() => window.location.reload())
                      }
                    >
                      글 삭제
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant="h6">작성된 글이 없습니다.</Typography>
      )}
    </Paper>
  );
}

export default App;
