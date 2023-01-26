export default function LogViewer({ id, title, writer, content, write_date }) {
  return (
    <>
      <span>
        {title} by {writer} - {write_date}
      </span>

      <button
        onClick={() => {
          fetch("http://localhost:8080/thread", {
            method: "delete",
            body: JSON.stringify({
              id: id,
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

      <pre>
        <p>{content}</p>
      </pre>
    </>
  );
}
