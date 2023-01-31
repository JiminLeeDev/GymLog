import { Button, Paper, Typography } from "@mui/material";

export default function LogViewer({ id, title, writer, content, write_date }) {
  return (
    <>
      <Paper
        elevation={4}
        sx={{ padding: "2%", margin: "2%", minHeight: "85vh" }}
      >
        <Typography>
          {title} - {writer}에 의해 {write_date}에 작성되었습니다.
          <Button
            onClick={() => {
              fetch(
                `${process.env.DB_SERVER_ADDRESS}:${process.env.DB_SERVER_PORT}/thread`,
                {
                  method: "delete",
                  body: JSON.stringify({
                    id: id,
                  }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );

              window.location.reload();
            }}
          >
            글 삭제
          </Button>
        </Typography>

        <Typography component={"span"}>
          <pre>{content}</pre>
        </Typography>
      </Paper>
    </>
  );
}
