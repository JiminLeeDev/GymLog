export default function LogViewer({ title, writer, content, write_date }) {
  return (
    <>
      {title} by {writer} - {write_date}
      <pre>
        <p>{content}</p>
      </pre>
    </>
  );
}
