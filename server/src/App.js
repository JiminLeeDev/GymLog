import { useEffect, useState } from "react";
import LogViewer from "./LogViwer";
import ThreadList from "./components/ThreadList";

function App({ id }) {
  const [thread, setThread] = useState({});

  useEffect(() => {
    fetch("http://localhost:8080/thread")
      .then((threads) => threads.json())
      .then((threads) =>
        setThread({
          title: threads[0].title,
          content: threads[0].content,
          date: threads[0].date,
          writer: threads[0].writer,
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

      <ThreadList />
    </>
  );
}

export default App;
