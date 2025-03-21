import { useState } from "react";
import { useSelector } from "react-redux";
import { useUpdateTempData } from "../../../../../../../../hooks/useUpdateTempData";
import TempDataEdit from "../../TempDataEdit";
import { FaEdit } from "react-icons/fa";
import { formatUSD } from "../../../../../../../../helpers/formatUSD";

function MiddleColLaborEdit({ expenseName, costInDollars, paidByThe }) {
  const [editMode, setEditMode] = useState(false);
  const { tempData } = useSelector((state) => state.column);
  const updateTempData = useUpdateTempData();

  return editMode ? (
    <div className="flex items-center justify-between bg-slate-900 px-4 py-4">
      <div className="pr-2">
        <span>{expenseName} costs </span>
        <TempDataEdit
          type="number"
          value={costInDollars}
          onChange={(e) =>
            updateTempData("costInDollars", Number(e.target.value), tempData)
          }
          setEditMode={setEditMode}
        />
        {paidByThe !== "flat" && <span> per {paidByThe}</span>}
      </div>
      <FaEdit
        onClick={() => setEditMode(false)}
        className="cursor-pointer text-lg text-slate-300 transition-all duration-200 hover:text-yellow-50 active:text-yellow-200"
      />
    </div>
  ) : (
    <div className="flex items-center justify-between bg-slate-900 px-4 py-4">
      <div className="pr-2">
        {expenseName} costs {formatUSD(costInDollars)}{" "}
        {paidByThe !== "flat" && `per ${paidByThe}`}
      </div>
      <FaEdit
        onClick={() => setEditMode(true)}
        className="cursor-pointer text-lg text-slate-300 transition-all duration-200 hover:text-yellow-50 active:text-yellow-200"
      />
    </div>
  );
}

export default MiddleColLaborEdit;
