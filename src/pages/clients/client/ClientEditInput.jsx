function ClientEditInput({ onChange, value, onEnter, onBlur }) {
  function handleEnter(e) {
    if (e.key !== "Enter") return;
    onEnter();
  }

  return (
    <input
      onChange={onChange}
      autoFocus
      className="bg-slate-300 pl-1 text-slate-950"
      value={value}
      onKeyDown={(e) => handleEnter(e)}
      onBlur={onBlur}
    ></input>
  );
}

export default ClientEditInput;
