import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { formatUSD } from "../../../../../../../../helpers/formatUSD";
import TempDataEdit from "../../TempDataEdit";
import { useUpdateTempData } from "../../../../../../../../hooks/useUpdateTempData";
import { useSelector } from "react-redux";

function MiddleColMaterialEdit({
  expenseName,
  costInDollars,
  measurementUnit,
  unitAmount,
}) {
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
        <span> per </span>
        <TempDataEdit
          type="number"
          value={unitAmount}
          onChange={(e) =>
            updateTempData("unitAmount", Number(e.target.value), tempData)
          }
          setEditMode={setEditMode}
        />
        <span> {measurementUnit}</span>
      </div>
      <FaEdit
        onClick={() => setEditMode(false)}
        className="cursor-pointer text-lg text-slate-300 transition-all duration-200 hover:text-yellow-50 active:text-yellow-200"
      />
    </div>
  ) : (
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
  );
}

export default MiddleColMaterialEdit;
