import { useEffect, useState } from "react";

function App() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/thread")
      .then((threads) => threads.json())
      .then((threads) => setThreads(threads.success ? threads.results : []));
  }, []);

  return threads.length > 0 ? (
    <ul>
      {threads.map((thread) => {
        return (
          <li key={thread.id}>
            <a
              style={{ textDecoration: "none" }}
              href={`http://localhost:3000/threads/${thread.id}`}
            >{`${thread.title} - ${thread.writer} ${thread.date} `}</a>

            <button
              onClick={() => {
                fetch("http://localhost:8080/thread", {
                  method: "delete",
                  body: JSON.stringify({
                    id: thread.id,
                  }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                });

                window.location.reload();
              }}
            >
              글 삭제
            </button>
          </li>
        );
      })}
    </ul>
  ) : (
    <div>작성된 글이 없습니다.</div>
  );
}

export default App;
