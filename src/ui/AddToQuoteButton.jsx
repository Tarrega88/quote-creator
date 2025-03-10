function AddToQuoteButton({ text = "Test", onClick }) {
  //TODO 3/9/2025: This or a parent function should then ask whether to add more or finish the quote

  return (
    <button
      className="w-40 cursor-pointer bg-slate-500 transition-all duration-100 hover:bg-slate-400 active:bg-slate-600"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default AddToQuoteButton;
