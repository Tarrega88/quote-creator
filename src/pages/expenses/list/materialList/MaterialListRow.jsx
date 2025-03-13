import { useDispatch } from "react-redux";
import RowDelete from "../RowDelete";
import { deleteExpense } from "../../../../store/slices/expenseSlice";

function MaterialListRow({ data, odd }) {
  const dispatch = useDispatch();
  const {
    expenseName,
    expenseType,
    measurementType,
    measurementUnit,
    costInDollars,
    unitAmount,
  } = data;

  function handleDelete() {
    dispatch(
      deleteExpense({ expenseType: expenseType, expenseName: expenseName }),
    );
  }

  const bgColor = odd ? "bg-slate-600" : "bg-slate-700";

  return (
    <div className={`grid grid-cols-5 ${bgColor} py-1 pl-4`}>
      <span>{expenseName}</span>
      <span>{measurementType}</span>
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
