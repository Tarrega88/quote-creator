import { useDispatch, useSelector } from "react-redux";
import MainFlexContainer from "../../../../ui/MainFlexContainer";
import RentalListRow from "./RentalListRow";
import RentalTitleRow from "./RentalTitleRow";
import { deleteExpense } from "../../../../store/slices/expenseSlice";

function RentalsList() {
  const dispatch = useDispatch();
  const expenseData = useSelector((state) => state.expense.expenses.rentals);
  const listOfExpenses = Object.keys(expenseData);

  function handleDelete(expenseType, expenseName) {
    dispatch(deleteExpense({ expenseType, expenseName }));
  }

  return (
    <MainFlexContainer back="/expenses/list">
      <div className="w-dvw">
        <RentalTitleRow />
        {listOfExpenses.map((e, i) => (
          <RentalListRow
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

export default RentalsList;
