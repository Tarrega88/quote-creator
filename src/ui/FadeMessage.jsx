function FadeMessage({ text = "Test Test Test", display = true }) {
  const opacity = display ? "opacity-100" : "opacity-0";

  return (
    <div
      className={`text-center transition-all duration-1000 ${opacity} pointer-events-none select-none`}
    >
      {text}
    </div>
  );
}

export default FadeMessage;
