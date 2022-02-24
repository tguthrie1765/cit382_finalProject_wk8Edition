import "./styles.css";

export default function Input({ input, setInput }) {
  const onInput = (event) => {
    setInput(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        id="test"
        placeholder="Search..."
        onChange={onInput}
        value={input}
      />
    </div>
  );
}
