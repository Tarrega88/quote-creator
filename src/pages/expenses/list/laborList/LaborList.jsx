import { useDispatch, useSelector } from "react-redux";
import MainFlexContainer from "../../../../ui/MainFlexContainer";
import LaborListRow from "./LaborListRow";
import LaborTitleRow from "./LaborTitleRow";
import { deleteExpense } from "../../../../store/slices/expenseSlice";

function LaborList() {
  const expenseData = useSelector((state) => state.expense.expenses.labor);
  const dispatch = useDispatch();
  const listOfExpenses = Object.keys(expenseData);

  function handleDelete(expenseType, expenseName) {
    dispatch(deleteExpense({ expenseType, expenseName }));
  }
  // delete state.expenses[action.payload.expenseType][action.payload.expenseName];

  return (
    <MainFlexContainer back="/expenses/list">
      <div className="w-dvw">
        <LaborTitleRow />
        {listOfExpenses.map((e, i) => (
          <LaborListRow
            data={expenseData[e]}
            key={i}
            odd={i % 2}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </MainFlexContainer>
  );
}

export default LaborList;
