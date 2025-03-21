import { useState } from "react";
import { formatUSD } from "../../../../../../../../helpers/formatUSD";
import MiddleColTitle from "../../MiddleColTitle";
import PriceRange from "../../PriceRange";
import MiddleColNumInput from "../../MiddleColNumInput";
import MaterialEditList from "./MaterialEditList";
import MidColNumSelect from "../../MidColNumSelect";
import { FaEdit } from "react-icons/fa";

function MiddleColMaterial({ data }) {
  console.log("Material Data");
  console.log(data);
  const {
    costInDollars,
    expenseName,
    expenseType,
    measurementType,
    measurementUnit,
    unitAmount,
  } = data;

  const displayStructure = {
    Material: expenseName,
  };

  const [editMode, setEditMode] = useState(false);

  //TODO 3/21/2025: move the useStates into a slice - the issue right now is they won't change
  //without something like useEffect or some other trigger - so global state will probably be easier to
  //make them update

  const [currentCost, setCurrentCost] = useState(costInDollars);
  const [currentExpenseName, setCurrentExpenseName] = useState(expenseName);
  const [currentUnitAmount, setCurrentUnitAmount] = useState(unitAmount);

  const [numToAdd, setNumToAdd] = useState(unitAmount);

  //TODO 3/20/2025: put an edit button that expands the top line of text down into a series of inputs to change the values.

  return (
    <div className="flex h-dvh flex-col bg-slate-800 pt-10">
      <MiddleColTitle text="Material Expense" />
      <div className="flex flex-col px-3 pt-16">
        {!editMode && (
          <div className="flex items-center justify-between bg-slate-900 px-4 py-4">
            <div className="pr-2">
              {expenseName} costs {formatUSD(currentCost)} per {unitAmount}{" "}
              {measurementUnit}
            </div>
            <FaEdit
              onClick={() => setEditMode(true)}
              className="cursor-pointer text-lg text-slate-300 transition-all duration-200 hover:text-yellow-50 active:text-yellow-200"
            />
          </div>
        )}
        {editMode && (
          <div className="flex items-center justify-between bg-slate-900 px-4 py-4">
            <div className="pr-2">
              {expenseName} costs{" "}
              {
                <input
                  className="w-16 bg-slate-500 px-1"
                  type="number"
                  value={currentCost}
                  onChange={(e) => setCurrentCost(Number(e.target.value))}
                  onKeyDown={(e) => e.key === "Enter" && setEditMode(false)}
                ></input>
              }{" "}
              per {unitAmount} {measurementUnit}
            </div>
            <FaEdit
              onClick={() => setEditMode(false)}
              className="cursor-pointer text-lg text-slate-300 transition-all duration-200 hover:text-yellow-50 active:text-yellow-200"
            />
          </div>
        )}
        <div className="flex flex-col gap-5 bg-slate-700 py-4">
          <div className="px-2">
            How many {measurementUnit} of {expenseName} will be needed?
          </div>
          <MidColNumSelect
            minAmount={unitAmount}
            currentNum={numToAdd}
            setCurrentNum={setNumToAdd}
          />
          <div className="flex items-center justify-between px-2">
            <div className="flex gap-2">
              <div>Cost:</div>
              <div>{formatUSD((numToAdd / unitAmount) * currentCost)}</div>
            </div>
            <div className="pr-2">
              <button className="h-8 w-12 cursor-pointer bg-emerald-700 transition-all duration-200 hover:bg-emerald-600 active:bg-emerald-500">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleColMaterial;
