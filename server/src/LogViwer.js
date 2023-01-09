export default function LogViewer({ title, writer, content, write_date }) {
  return (
    <>
      {title} by {writer} - {write_date}
      <p>{content}</p>
    </>
  );
}
