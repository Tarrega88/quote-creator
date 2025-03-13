function NumberInput({ onChange, onEnter }) {
  function handleEnter(e) {
    if (e.key === "Enter") onEnter();
  }
  return (
    <input
      type="number"
      className="w-24 bg-slate-500 px-2"
      onChange={onChange}
      onKeyDown={handleEnter}
    ></input>
  );
}

export default NumberInput;
