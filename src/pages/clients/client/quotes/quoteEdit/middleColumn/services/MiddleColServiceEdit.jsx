import { useState } from "react";
import { useUpdateTempData } from "../../../../../../../hooks/useUpdateTempData";
import TempDataEdit from "../TempDataEdit";
import { FaEdit } from "react-icons/fa";
import { formatUSD } from "../../../../../../../helpers/formatUSD";

function MiddleColServiceEdit({ tempData }) {
  const [editMode, setEditMode] = useState(false);

  const updateTempData = useUpdateTempData();

  //TODO 3/22/2025 - display info dynamically

  const {
    category,
    multiple,
    pay,
    paymentMethod,
    serviceCategory,
    serviceName,
    measurementType,
    measurementUnit,
    unitAmount,
    timeUnit,
  } = tempData;

  return editMode ? (
    <div className="flex items-center justify-between bg-slate-900 px-4 py-4">
      <div className="pr-2">
        <span>{serviceName} costs </span>
        <TempDataEdit
          type="number"
          value={pay}
          onChange={(e) =>
            updateTempData("pay", Number(e.target.value), tempData)
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
        {serviceName} costs {formatUSD(pay)} per {unitAmount} {measurementUnit}
      </div>
      <FaEdit
        onClick={() => setEditMode(true)}
        className="cursor-pointer text-lg text-slate-300 transition-all duration-200 hover:text-yellow-50 active:text-yellow-200"
      />
    </div>
  );
}

export default MiddleColServiceEdit;
