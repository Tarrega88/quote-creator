function TempDataEdit({ value, onChange, type, setEditMode }) {
  return (
    <input
      className="w-16 bg-slate-500 px-1"
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={(e) => e.key === "Enter" && setEditMode(false)}
    ></input>
  );
}

export default TempDataEdit;
