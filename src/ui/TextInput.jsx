function TextInput({ onChange, onEnter }) {
  function handleEnter(e) {
    if (e.key === "Enter") onEnter();
  }

  return (
    <input
      className="mx-6 bg-slate-500 py-2 pl-2 text-slate-50"
      onChange={onChange}
      onKeyDown={handleEnter}
    ></input>
  );
}

export default TextInput;
