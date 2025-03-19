function HybridInput({ onChange, onEnter }) {
  function handleEnter(e) {
    if (e.key !== "Enter") return;
    onEnter();
  }

  return (
    <input
      onChange={onChange}
      className="my-1 h-4/5 w-32 bg-slate-700 px-2"
      onKeyDown={handleEnter}
      autoFocus
    ></input>
  );
}

export default HybridInput;
