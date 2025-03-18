function HybridInput({ onChange, onEnter }) {
  function handleEnter(e) {
    if (e.key !== "Enter") return;
    onEnter();
  }

  return (
    <input
      onChange={onChange}
      className="my-1 h-4/5 w-52 bg-slate-700 px-2"
      onKeyDown={handleEnter}
    ></input>
  );
}

export default HybridInput;
