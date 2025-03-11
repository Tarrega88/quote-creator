function AcceptButton({ text = "Done", onClick, isActive = true }) {
  const active = isActive
    ? "bg-green-800 hover:bg-green-700 active:bg-green-600 cursor-pointer"
    : "disabled bg-gray-500 opacity-70";

  function handleClick() {
    if (!isActive) return;
    onClick();
  }

  return (
    <button
      onClick={handleClick}
      className={`${active} h-8 w-24 transition-all duration-100`}
    >
      {text}
    </button>
  );
}

export default AcceptButton;
