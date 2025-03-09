function Dropdown({ options = [], onChange }) {
  return (
    <select className="bg-slate-500" onChange={onChange}>
      {options.map((e, i) => (
        <option key={i}>{e}</option>
      ))}
    </select>
  );
}

export default Dropdown;
