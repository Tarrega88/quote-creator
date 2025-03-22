function MiddleColNumInput({ currentNum, setCurrentNum, minAmount }) {
  //   const caretClass =
  //     "cursor-pointer text-slate-50 hover:text-slate-400 transition-all duration-200 active:text-slate-200";

  function handleOnChange(num) {
    const updatedValue = Math.ceil(num / minAmount) * minAmount;
    setCurrentNum(updatedValue);
  }

  return (
    <div className="flex items-center justify-center">
      <button
        className="w-8 cursor-pointer bg-slate-500 hover:bg-slate-400"
        onClick={() =>
          currentNum - minAmount > 0
            ? setCurrentNum(currentNum - minAmount)
            : setCurrentNum(currentNum)
        }
      >
        -
      </button>
      <div className="w-12 bg-slate-600 text-center">{currentNum}</div>

      <button
        className="w-8 cursor-pointer bg-slate-500 hover:bg-slate-400"
        onClick={() => setCurrentNum(currentNum + minAmount)}
      >
        +
      </button>
    </div>
  );
}

export default MiddleColNumInput;
