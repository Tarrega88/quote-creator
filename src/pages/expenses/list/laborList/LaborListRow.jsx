import { useDispatch } from "react-redux";
import RowDelete from "../RowDelete";
import { deleteExpense } from "../../../../store/slices/expenseSlice";

function LaborListRow({ data, odd }) {
  console.log(data);
  const { expenseName, expenseType, costInDollars, paidByThe } = data;
  const dispatch = useDispatch();

  //TODO 3/12/2025: add ability to edit/delete

  function handleDelete(expenseName) {
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
      <span>${costInDollars}</span>
      <span>{flatOrTimeText}</span>
      <RowDelete onClick={() => handleDelete(expenseName)} />
    </div>
  );
}

export default LaborListRow;
