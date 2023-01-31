import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LogViewer from "./LogViwer";

export default function App() {
  const [thread, setState] = useState({
    id: undefined,
    title: "",
    content: "",
    date: "",
    writer: "",
  });
  const params = useParams();

  useEffect(() => {
    if (params.id !== undefined) {
      fetch(
        `${process.env.DB_SERVER_ADDRESS}:${process.env.DB_SERVER_PORT}/thread?id=${params.id}`
      )
        .then((threads) => threads.json())
        .then((threads) =>
          threads.success
            ? setState({
                ...thread,
                id: threads.results[0].id,
                title: threads.results[0].title,
                content: threads.results[0].content,
                date: threads.results[0].date,
                writer: threads.results[0].writer,
              })
            : ""
        );
    }
  }, []);

  return (
    <>
      {thread.id ? (
        <LogViewer
          id={thread.id}
          title={thread.title}
          content={thread.content}
          write_date={thread.date}
          writer={thread.writer}
        />
      ) : (
        ""
      )}
    </>
  );
}
