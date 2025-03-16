import { useDispatch } from "react-redux";
import RowDelete from "../RowDelete";
import { deleteExpense } from "../../../../store/slices/expenseSlice";
import { removeFromServiceExpenses } from "../../../../store/slices/serviceSlice";

function MaterialListRow({ data, odd }) {
  const dispatch = useDispatch();
  const {
    appliedTo,
    expenseName,
    expenseType,
    measurementType,
    measurementUnit,
    costInDollars,
    unitAmount,
  } = data;

  function handleDelete() {
    //TODO 3/16/2025: Add this logic to the other ListRows (after confirming it works):
    for (const [serviceName, serviceCategory] of Object.entries(appliedTo)) {
      dispatch(
        removeFromServiceExpenses({
          serviceCategory,
          expenseType,
          serviceName,
          expense: expenseName,
        }),
      );
    }
    dispatch(
      deleteExpense({ expenseType: expenseType, expenseName: expenseName }),
    );
  }

  const bgColor = odd ? "bg-slate-600" : "bg-slate-700";

  return (
    <div className={`grid grid-cols-5 ${bgColor} py-1 pl-4`}>
      <span>{expenseName}</span>
      <span>
        {measurementType} in {measurementUnit}
      </span>
      {/* <span>{measurementUnit}</span> */}
      <span>${costInDollars}</span>
      <span>
        {unitAmount} {measurementUnit}
      </span>
      <RowDelete onClick={handleDelete} />
    </div>
  );
}

export default MaterialListRow;
