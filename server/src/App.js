import { useEffect, useState } from "react";
import LogViewer from "./LogViwer";

function App({ id }) {
  const [thread, setThread] = useState({});

  useEffect(() => {
    fetch("http://localhost:8080/thread")
      .then((d) => d.json())
      .then((d) =>
        setThread({
          title: d[0].title,
          content: d[0].content,
          date: d[0].date,
          writer: d[0].writer,
        })
      );
  }, []);

  return (
    <>
      <LogViewer
        title={thread.title}
        content={thread.content}
        write_date={thread.date}
        writer={thread.writer}
      />
    </>
  );
}

export default App;
