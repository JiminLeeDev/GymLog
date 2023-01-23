import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LogViewer from "./LogViwer";
import ThreadList from "./components/ThreadList";

function App() {
  const [thread, setThread] = useState({});
  const params = useParams();

  useEffect(() => {
    console.log(params);
    fetch(`http://localhost:8080/thread?id=${params.id}`)
      .then((threads) => threads.json())
      .then((threads) =>
        threads.length > 0
          ? setThread({
              title: threads[0].title,
              content: threads[0].content,
              date: threads[0].date,
              writer: threads[0].writer,
            })
          : ""
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
