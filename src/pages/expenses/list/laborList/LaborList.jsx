import { useSelector } from "react-redux";
import MainFlexContainer from "../../../../ui/MainFlexContainer";
import LaborListRow from "./LaborListRow";
import LaborTitleRow from "./LaborTitleRow";

function LaborList() {
  const expenseData = useSelector((state) => state.expense.expenses.labor);
  const listOfExpenses = Object.keys(expenseData);

  return (
    <MainFlexContainer back="/expenses/list">
      <div className="w-dvw">
        <LaborTitleRow />
        {listOfExpenses.map((e, i) => (
          <LaborListRow data={expenseData[e]} key={i} odd={i % 2} />
        ))}
      </div>
    </MainFlexContainer>
  );
}

export default LaborList;
