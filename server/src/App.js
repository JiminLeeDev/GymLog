import { useEffect } from "react";
import LogViewer from "./LogViwer";
import { GetPost } from "../../db/server.js";

function App({ id }) {
  useEffect(() => {
    GetPost()
      .then((d) => {
        console.log(d);
        d.json();
      })
      .then((d) => console.log(d));
  });

  return (
    <>
      <LogViewer
        title="첫 로그"
        content="처음 작성된 로그 문서입니다. "
        write_date="2023-01-08-SUN:02:19:00"
        writer="GymIn"
      />
    </>
  );
}

export default App;
