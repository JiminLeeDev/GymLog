import { Button, Paper, TextField } from "@mui/material";
import { useState } from "react";

export default function ThreadWrite() {
  const [state, setState] = useState({
    title: "",
    content: "",
    writer: "",
  });

  const on_change_form = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        console.log(
          `${process.env.REACT_APP_DB_SERVER_ADDRESS}:${process.env.REACT_APP_DB_SERVER_PORT}/thread`
        );

        fetch(
          `${process.env.REACT_APP_DB_SERVER_ADDRESS}:${process.env.REACT_APP_DB_SERVER_PORT}/thread`,
          {
            method: "post",
            body: JSON.stringify({
              title: state.title,
              content: state.content,
              writer: state.writer,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((insert_result) => insert_result.json())
          .then((insert_result) => {
            if (insert_result.success) {
              window.location.href = `/threads/${insert_result.results.insertId}`;
            } else {
              alert(insert_result.errorMessage);
            }
          });
      }}
    >
      <Paper
        sx={{
          padding: "2%",
          margin: "2%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          label="제목"
          variant="standard"
          name="title"
          onChange={on_change_form}
          value={state.title}
        />

        <TextField
          label="본문"
          variant="standard"
          name="content"
          onChange={on_change_form}
          value={state.content}
          multiline
          rows={15}
        />

        <TextField
          label="작성자명"
          variant="standard"
          name="writer"
          onChange={on_change_form}
          value={state.writer}
        />

        <Button type="submit">작성</Button>
      </Paper>
    </form>
  );
}
