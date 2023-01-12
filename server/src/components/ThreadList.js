import { useEffect, useState } from "react";

function App({ id }) {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/thread")
      .then((threads) => threads.json())
      .then((threads) => setThreads(threads));
  }, []);

  return (
    <ul>
      {threads.map((thread) => (
        <li>{`${thread.title} - ${thread.writer} ${thread.date} `}</li>
      ))}
    </ul>
  );
}

export default App;
