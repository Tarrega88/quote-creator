function MidColNumSelect({ currentNum, setCurrentNum, minAmount }) {
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

export default MidColNumSelect;
