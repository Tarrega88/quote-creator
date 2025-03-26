function SquareButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="size-32 cursor-pointer rounded-md bg-gradient-to-br from-slate-700 to-slate-600 opacity-90 transition-all duration-200 hover:opacity-100"
    >
      {text}
    </button>
  );
}

export default SquareButton;
