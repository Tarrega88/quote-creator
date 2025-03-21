import { useDispatch } from "react-redux";
import { setCurrentMultiple } from "../../../../../../store/slices/columnSlice";

function MidColNumSelect({ minAmount, multiple }) {
  const dispatch = useDispatch();

  function handleClick(value) {
    dispatch(setCurrentMultiple(multiple + value));
  }

  return (
    <div className="flex items-center justify-center">
      <button
        className="w-8 cursor-pointer bg-slate-500 hover:bg-slate-400"
        onClick={() => (multiple > 1 ? handleClick(-1) : handleClick(0))}
      >
        -
      </button>
      <div className="w-12 bg-slate-600 text-center">
        {minAmount * multiple}
      </div>
      <button
        className="w-8 cursor-pointer bg-slate-500 hover:bg-slate-400"
        onClick={() => handleClick(1)}
      >
        +
      </button>
    </div>
  );
}

export default MidColNumSelect;
