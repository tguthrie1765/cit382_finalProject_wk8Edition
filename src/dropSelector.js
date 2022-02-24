import "./styles.css";

export default function DropSelect({ selection, setSelection }) {
  const selectChange = (event) => setSelection(event.target.value);
  return (
    <select name="dropdown" onChange={selectChange} className="dropdown">
      <option value="keyword">Keyword</option>
      <option value="title">Title</option>
      <option value="author">Author</option>
    </select>
  );
}
