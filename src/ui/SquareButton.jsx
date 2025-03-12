function SquareButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="size-26 cursor-pointer rounded-md bg-slate-600 transition-all duration-200 hover:bg-slate-500 active:bg-slate-400"
    >
      {text}
    </button>
  );
}

export default SquareButton;
