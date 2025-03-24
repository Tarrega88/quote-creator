import { useDispatch, useSelector } from "react-redux";
import MainFlexContainer from "../../../../ui/MainFlexContainer";
import MaterialListRow from "./MaterialListRow";
import MaterialTitleRow from "./MaterialTitleRow";
import { deleteExpense } from "../../../../store/slices/expenseSlice";

function MaterialsList() {
  const dispatch = useDispatch();
  const expenseData = useSelector((state) => state.expense.expenses.materials);
  const listOfExpenses = Object.keys(expenseData);

  function handleDelete(expenseType, expenseName) {
    dispatch(deleteExpense({ expenseType, expenseName }));
  }

  return (
    <MainFlexContainer back="/expenses/list">
      <div className="w-dvw">
        <MaterialTitleRow />
        {listOfExpenses.map((e, i) => (
          <MaterialListRow
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

export default MaterialsList;
