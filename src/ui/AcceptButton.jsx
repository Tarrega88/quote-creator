function AcceptButton({ text = "Done", onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-green-800 hover:bg-green-700 active:bg-green-600 transition-all duration-100 cursor-pointer w-24 h-8"
    >
      {text}
    </button>
  );
}

export default AcceptButton;
