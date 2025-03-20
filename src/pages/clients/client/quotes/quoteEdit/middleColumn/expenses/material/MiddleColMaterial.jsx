import { useState } from "react";
import { formatUSD } from "../../../../../../../../helpers/formatUSD";
import MiddleColTitle from "../../MiddleColTitle";

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

  //Cost: costInDollars per unitAmount measurementUnit

  return (
    <div className="h-dvh bg-slate-800 pt-10">
      <MiddleColTitle text="Adding Material" />
      <div className="flex flex-col px-3 pt-6">
        <span className="flex">
          {expenseName} costs {formatUSD(costInDollars)} per {unitAmount}{" "}
          {measurementUnit}
        </span>
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
