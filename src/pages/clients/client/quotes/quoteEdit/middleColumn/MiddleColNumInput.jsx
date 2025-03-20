import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";

function MiddleColNumInput({ currentNum, setCurrentNum }) {
  const caretClass =
    "cursor-pointer text-slate-50 hover:text-slate-400 transition-all duration-200 active:text-slate-200";

  function handleClick() {}

  return (
    <div className="flex items-center justify-center">
      <FaCaretLeft
        className={`text-2xl ${caretClass}`}
        onClick={() => setCurrentNum(currentNum - 1)}
      />
      <FaCaretLeft
        className={`text-4xl ${caretClass}`}
        onClick={() => setCurrentNum(currentNum - 5)}
      />
      <input
        type="number"
        className="w-24 bg-slate-200 px-1 text-slate-950"
        value={currentNum}
        onChange={(e) => setCurrentNum(Number(e.target.value))}
      ></input>
      <FaCaretRight
        className={`text-4xl ${caretClass}`}
        onClick={() => setCurrentNum(currentNum + 5)}
      />
      <FaCaretRight
        className={`text-2xl ${caretClass}`}
        onClick={() => setCurrentNum(currentNum + 1)}
      />
    </div>
  );
}

export default MiddleColNumInput;
