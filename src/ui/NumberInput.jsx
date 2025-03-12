function NumberInput({ onChange }) {
  return (
    <input
      type="number"
      className="w-24 bg-slate-500 px-2"
      onChange={onChange}
    ></input>
  );
}

export default NumberInput;
