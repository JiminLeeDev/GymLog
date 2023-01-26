import { useEffect, useState } from "react";

function App() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/thread")
      .then((threads) => threads.json())
      .then((threads) => setThreads(threads));
  }, []);

  return (
    <ul>
      {threads.length > 0
        ? threads.map((thread) => (
            <li key={thread.id}>
              <a
                href={`http://localhost:3000/${thread.id}`}
              >{`${thread.title} - ${thread.writer} ${thread.date} `}</a>
            </li>
          ))
        : ""}
    </ul>
  );
}

export default App;
