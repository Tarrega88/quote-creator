function RowDelete({ text = "Delete", onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-16 cursor-pointer bg-red-600 transition-all duration-200 hover:bg-red-500"
    >
      {text}
    </button>
  );
}

export default RowDelete;
