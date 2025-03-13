function NumberInput({ onChange, onEnter }) {
  return (
    <input
      type="number"
      className="w-24 bg-slate-500 px-2"
      onChange={onChange}
      onKeyDown={onEnter}
    ></input>
  );
}

export default NumberInput;
