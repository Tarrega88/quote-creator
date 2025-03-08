function TextInput({ onChange, onEnter }) {
  function handleEnter(e) {
    if (e.key === "Enter") onEnter();
  }

  return (
    <input
      className="bg-slate-500 text-slate-50 pl-2 py-2"
      onChange={onChange}
      onKeyDown={handleEnter}
    ></input>
  );
}

export default TextInput;
