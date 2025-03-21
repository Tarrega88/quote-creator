import { useUpdateTempData } from "../../../../../../hooks/useUpdateTempData";

function MidColNumSelect({ minAmount, multiple, tempData }) {
  const updateTempData = useUpdateTempData();

  function handleClick(value) {
    updateTempData("multiple", multiple + value, tempData);
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
