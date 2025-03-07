function AddToQuoteButton({ text = "Test", onClick }) {
  return (
    <button
      className="w-40 bg-slate-500 hover:bg-slate-400 transition-all duration-100 active:bg-slate-600"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default AddToQuoteButton;
