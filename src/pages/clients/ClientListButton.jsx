function ClientListButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-18 cursor-pointer bg-sky-500 text-sky-50 transition-all duration-200 hover:bg-sky-400"
    >
      {text}
    </button>
  );
}

export default ClientListButton;
