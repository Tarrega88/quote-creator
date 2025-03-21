import { useState } from "react";
import { formatUSD } from "../../../../../../../../helpers/formatUSD";
import MiddleColTitle from "../../MiddleColTitle";
import MiddleColNumInput from "../../MiddleColNumInput";
import MaterialEditList from "./MaterialEditList";
import MidColNumSelect from "../../MidColNumSelect";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setTempData } from "../../../../../../../../store/slices/columnSlice";

function MiddleColMaterial({ data }) {
  const dispatch = useDispatch();
  // console.log("Material Data");
  // console.log(data);

  const [editMode, setEditMode] = useState(false);
  const tempData = useSelector((state) => state.column.tempData);
  // console.log("tempData");
  // console.log(tempData);

  const {
    costInDollars,
    expenseName,
    expenseType,
    measurementType,
    measurementUnit,
    unitAmount,
  } = tempData;

  const displayStructure = {
    Material: expenseName,
  };

  //TODO 3/21/2025: this useState needs to go away - need to look ahead and see how I'm storing updates to the data
  const [numToAdd, setNumToAdd] = useState(unitAmount);

  function updateTempData(type, update) {
    dispatch(setTempData({ ...tempData, [type]: update }));
  }

  //TODO 3/20/2025: put an edit button that expands the top line of text down into a series of inputs to change the values.

  return (
    <div className="flex h-dvh flex-col bg-slate-800 pt-10">
      <MiddleColTitle text="Material Expense" />
      <div className="flex flex-col px-3 pt-16">
        {!editMode && (
          <div className="flex items-center justify-between bg-slate-900 px-4 py-4">
            <div className="pr-2">
              {expenseName} costs {formatUSD(costInDollars)} per {unitAmount}{" "}
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
                  value={costInDollars}
                  onChange={(e) =>
                    updateTempData("costInDollars", Number(e.target.value))
                  }
                  onKeyDown={(e) => e.key === "Enter" && setEditMode(false)}
                ></input>
              }{" "}
              per
              <input
                className="w-16 bg-slate-500 px-1"
                value={unitAmount}
                type="number"
                onChange={(e) =>
                  updateTempData("unitAmount", Number(e.target.value))
                }
              ></input>{" "}
              {measurementUnit}
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
              <div>{formatUSD((numToAdd / unitAmount) * costInDollars)}</div>
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
