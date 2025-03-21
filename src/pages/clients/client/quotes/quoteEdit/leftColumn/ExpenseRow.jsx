import { useDispatch, useSelector } from "react-redux";
import {
  setSelection,
  setSubCategory,
  setTempData,
} from "../../../../../../store/slices/columnSlice";

function ExpenseRow({ data, odd, visible, subCategory }) {
  const dispatch = useDispatch();
  const colors = odd
    ? "bg-slate-700 hover:bg-slate-600"
    : "bg-slate-900 hover:bg-slate-800";

  const expenses = useSelector((state) => state.expense.expenses);
  const expenseData = expenses[subCategory][data];

  function handleClick() {
    dispatch(setSubCategory(subCategory));
    dispatch(setSelection(data));
    dispatch(setTempData({ ...expenseData, multiple: 1 }));
  }

  return (
    <li
      onClick={handleClick}
      className={`flex gap-1 pl-2 ${colors} ${visible ? "h-8" : "h-0"} cursor-pointer items-center transition-all duration-300`}
    >
      {visible && <div>{data}</div>}
    </li>
  );
}

export default ExpenseRow;
