import { useSelector } from "react-redux";
import MainFlexContainer from "../../../../ui/MainFlexContainer";
import MaterialListRow from "./MaterialListRow";
import MaterialTitleRow from "./MaterialTitleRow";

function MaterialsList() {
  const expensesData = useSelector((state) => state.expense.expenses.materials);
  const listOfExpenses = Object.keys(expensesData);
  return (
    <MainFlexContainer back="/expenses/list">
      <div className="w-dvw">
        <MaterialTitleRow />
        {listOfExpenses.map((e, i) => (
          <MaterialListRow data={expensesData[e]} key={i} odd={i % 2} />
        ))}
      </div>
    </MainFlexContainer>
  );
}

export default MaterialsList;
