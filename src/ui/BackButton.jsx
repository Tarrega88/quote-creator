function BackButton({ onClick, text = "Back" }) {
  return (
    <div className="flex h-10 w-18 justify-center rounded-br-md border-r border-b border-slate-600">
      <button
        onClick={onClick}
        className="w-full cursor-pointer rounded-br-md transition-all duration-200 hover:bg-slate-700"
      >
        {text}
      </button>
    </div>
  );
}

export default BackButton;
