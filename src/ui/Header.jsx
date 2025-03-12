function Header({ text, subtext = "" }) {
  return (
    <div>
      <div className="text-center text-2xl sm:text-2xl">{text}</div>
      {subtext.length > 0 && <div>{subtext}</div>}
    </div>
  );
}

export default Header;
