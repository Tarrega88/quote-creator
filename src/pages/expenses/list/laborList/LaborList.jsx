import { useSelector } from "react-redux";
import MainFlexContainer from "../../../../ui/MainFlexContainer";
import LaborListRow from "./LaborListRow";
import LaborTitleRow from "./LaborTitleRow";

function LaborList() {
  const expensesData = useSelector((state) => state.expense.expenses.labor);
  const listOfExpenses = Object.keys(expensesData);

  return (
    <MainFlexContainer back="/expenses/list">
      <div className="w-dvw">
        <LaborTitleRow />
        {listOfExpenses.map((e, i) => (
          <LaborListRow data={expensesData[e]} key={i} odd={i % 2} />
        ))}
      </div>
    </MainFlexContainer>
  );
}

export default LaborList;
