import { useState } from "react";
import { formatUSD } from "../../../../../../../../helpers/formatUSD";
import MiddleColTitle from "../../MiddleColTitle";
import PriceRange from "../../PriceRange";
import MiddleColNumInput from "../../MiddleColNumInput";
import MaterialEditList from "./MaterialEditList";

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

  //Cost: costInDollars per unitAmount measurementUnit

  return (
    <div className="flex h-dvh flex-col bg-slate-800 pt-10">
      <MiddleColTitle text="Material Expense" />
      <div className="flex flex-col px-3 pt-6">
        <span className="pb-4">
          {expenseName} costs {formatUSD(currentCost)} per {unitAmount}{" "}
          {measurementUnit}
        </span>
        <MaterialEditList
          currentCost={currentCost}
          setCurrentCost={setCurrentCost}
          currentExpenseName={currentExpenseName}
          setCurrentExpenseName={setCurrentExpenseName}
          currentUnitAmount={currentUnitAmount}
          setCurrentUnitAmount={setCurrentUnitAmount}
        />
        {/* <span className="text-center">{expenseName} costs</span> */}
        {/* <MiddleColNumInput
          currentNum={currentCost}
          setCurrentNum={setCurrentCost}
        /> */}
        {/* <div className="flex gap-2">
          <span>Material: </span>
          <span>{expenseName}</span>
        </div>
        <div>
          <span>Cost: </span>
          <span>
            ${costInDollars} per {unitAmount} {measurementUnit}
          </span>
        </div> */}
      </div>
    </div>
  );
}

export default MiddleColMaterial;
