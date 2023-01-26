import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LogViewer from "./LogViwer";
import ThreadList from "./components/ThreadList";

function App() {
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
    fetch(`http://localhost:8080/thread?id=${params.id}`)
      .then((threads) => threads.json())
      .then((threads) =>
        threads.length > 0
          ? setState({
              ...state,
              thread_id: threads[0].id,
              thread_title: threads[0].title,
              thread_content: threads[0].content,
              thread_date: threads[0].date,
              thread_writer: threads[0].writer,
            })
          : ""
      );
  }, []);

  return (
    <>
      <LogViewer
        id={state.thread_id}
        title={state.thread_title}
        content={state.thread_content}
        write_date={state.thread_date}
        writer={state.thread_writer}
      />
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
          });

          window.location.reload();
        }}
      >
        <fieldset style={{ width: "50%" }}>
          <legend>게시글 작성</legend>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <textarea
              rows={5}
              cols={20}
              name="new_thread_content"
              style={{ resize: "none" }}
              placeholder="본문"
              onChange={on_change_form}
              value={state.content}
            />
            <input
              type="text"
              name="new_thread_title"
              placeholder="제목"
              onChange={on_change_form}
              value={state.title}
            />
            <input
              type="text"
              name="new_thread_writer"
              placeholder="작성자"
              onChange={on_change_form}
              value={state.writer}
            />
            <input type="submit" value="전송" />
          </div>
        </fieldset>
      </form>

      <ThreadList />
    </>
  );
}

export default App;
