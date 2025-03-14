import { useDispatch } from "react-redux";
import { deleteExpense } from "../../../../store/slices/expenseSlice";
import RowDelete from "../RowDelete";

function RentalListRow({ data, odd }) {
  const { expenseName, expenseType, costInDollars, paidByThe } = data;
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(
      deleteExpense({ expenseType: expenseType, expenseName: expenseName }),
    );
  }

  const bgColor = odd ? "bg-slate-600" : "bg-slate-700";
  const flatOrTimeText =
    paidByThe === "flat" ? "flat rate" : `per ${paidByThe}`;

  return (
    <div className={`grid grid-cols-4 ${bgColor} py-1 pl-4`}>
      <span>{expenseName}</span>
      <span>{costInDollars}</span>
      <span>{flatOrTimeText}</span>
      <RowDelete onClick={handleDelete} />
    </div>
  );
}

export default RentalListRow;
