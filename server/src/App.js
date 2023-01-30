import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LogViewer from "./LogViwer";
import ThreadList from "./components/ThreadList";
import { Button, Paper, TextField } from "@mui/material";

export default function App() {
  const [state, setState] = useState({
    thread_id: undefined,
    thread_title: "",
    thread_content: "",
    thread_date: "",
    thread_writer: "",
    new_thread_title: "",
    new_thread_content: "",
    new_thread_writer: "",
  });
  const params = useParams();
  const on_change_form = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (params.id !== undefined) {
      fetch(`http://localhost:8080/thread?id=${params.id}`)
        .then((threads) => threads.json())
        .then((threads) =>
          threads.success
            ? setState({
                ...state,
                thread_id: threads.results[0].id,
                thread_title: threads.results[0].title,
                thread_content: threads.results[0].content,
                thread_date: threads.results[0].date,
                thread_writer: threads.results[0].writer,
              })
            : ""
        );
    }
  }, []);

  return (
    <>
      {state.thread_id ? (
        <LogViewer
          id={state.thread_id}
          title={state.thread_title}
          content={state.thread_content}
          write_date={state.thread_date}
          writer={state.thread_writer}
        />
      ) : (
        ""
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();

          fetch("http://localhost:8080/thread", {
            method: "post",
            body: JSON.stringify({
              title: state.new_thread_title,
              content: state.new_thread_content,
              writer: state.new_thread_writer,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
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
            name="new_thread_title"
            onChange={on_change_form}
            value={state.new_thread_title}
          />

          <TextField
            label="본문"
            variant="standard"
            name="new_thread_content"
            onChange={on_change_form}
            value={state.new_thread_content}
            multiline
            rows={15}
            maxRows={15}
          />

          <TextField
            label="작성자명"
            variant="standard"
            name="new_thread_writer"
            onChange={on_change_form}
            value={state.new_thread_writer}
          />

          <Button type="submit">작성</Button>
        </Paper>
      </form>

      <ThreadList />
    </>
  );
}
