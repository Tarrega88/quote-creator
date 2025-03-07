function SlideView({ isVisible, children }) {
  return (
    <div
      className={
        !isVisible
          ? "transition-all duration-300 -translate-x-full opacity-0"
          : "transition-all duration-300 opacity-100"
      }
    >
      {children}
    </div>
  );
}

export default SlideView;
