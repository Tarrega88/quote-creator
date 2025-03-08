function BackButton({ onClick, text = "Back" }) {
  return (
    <div className="flex h-8 w-16 justify-center">
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
