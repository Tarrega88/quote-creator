import { useState } from "react";
import { formatUSD } from "../../../../../../../../helpers/formatUSD";
import MiddleColTitle from "../../MiddleColTitle";
import MiddleColNumInput from "../../MiddleColNumInput";
import MidColNumSelect from "../../MidColNumSelect";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setTempData } from "../../../../../../../../store/slices/columnSlice";
import { useParams } from "react-router-dom";
import MiddleColMaterialEdit from "./MiddleColMaterialEdit";

function MiddleColMaterial() {
  // console.log("Material Data");
  // console.log(data);

  const columnSelector = useSelector((state) => state.column);
  const tempData = columnSelector.tempData;
  // console.log("tempData");
  // console.log(tempData);

  const {
    costInDollars,
    expenseName,
    expenseType,
    measurementType,
    measurementUnit,
    unitAmount,
    multiple,
  } = tempData;

  // console.log("TEST");
  const { clientURL, quoteID } = useParams();
  // console.log(clientURL, quoteID);
  // console.log(expenseType);

  const totalCost = multiple * costInDollars;

  return (
    <div className="flex h-dvh flex-col bg-slate-800 pt-10">
      <MiddleColTitle text="Material Expense" />
      <div className="flex flex-col px-3 pt-16">
        <MiddleColMaterialEdit
          expenseName={expenseName}
          costInDollars={costInDollars}
          measurementUnit={measurementUnit}
          unitAmount={unitAmount}
        />
        <div className="flex flex-col gap-5 bg-slate-700 py-4">
          <div className="px-2">
            How many {measurementUnit} of {expenseName} will be needed?
          </div>
          <MidColNumSelect
            minAmount={unitAmount}
            multiple={multiple}
            tempData={tempData}
          />
          <div className="flex items-center justify-between px-2">
            <div className="flex gap-2">
              <div>Cost:</div>
              <div>{formatUSD(totalCost)}</div>
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
