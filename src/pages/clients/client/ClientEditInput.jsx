function ClientEditInput({ onChange, value }) {
  return (
    <input
      onChange={onChange}
      autoFocus
      className="bg-slate-300 pl-1 text-slate-950"
      value={value}
    ></input>
  );
}

export default ClientEditInput;
