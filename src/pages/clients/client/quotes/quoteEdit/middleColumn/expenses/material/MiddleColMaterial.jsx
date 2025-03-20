import { useState } from "react";
import { formatUSD } from "../../../../../../../../helpers/formatUSD";
import MiddleColTitle from "../../MiddleColTitle";
import PriceRange from "../../PriceRange";
import MiddleColNumInput from "../../MiddleColNumInput";
import MaterialEditList from "./MaterialEditList";
import MidColNumSelect from "../../MidColNumSelect";

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

  const [currentCost, setCurrentCost] = useState(costInDollars);
  const [currentExpenseName, setCurrentExpenseName] = useState(expenseName);
  const [currentUnitAmount, setCurrentUnitAmount] = useState(unitAmount);

  const min = Math.floor(costInDollars * 0.8);
  const max = Math.ceil(costInDollars * 1.2);

  const [numToAdd, setNumToAdd] = useState(unitAmount);

  //TODO 3/20/2025: put an edit button that expands the top line of text down into a series of inputs to change the values.

  return (
    <div className="flex h-dvh flex-col bg-slate-800 pt-10">
      <MiddleColTitle text="Material Expense" />
      <div className="flex flex-col px-3 pt-16">
        <div className="bg-slate-900 px-2 py-4">
          {expenseName} costs {formatUSD(currentCost)} per {unitAmount}{" "}
          {measurementUnit}
        </div>
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
