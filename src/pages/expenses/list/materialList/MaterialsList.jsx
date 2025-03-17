import { useSelector } from "react-redux";
import MainFlexContainer from "../../../../ui/MainFlexContainer";
import MaterialListRow from "./MaterialListRow";
import MaterialTitleRow from "./MaterialTitleRow";

function MaterialsList() {
  const expenseData = useSelector((state) => state.expense.expenses.materials);
  const listOfExpenses = Object.keys(expenseData);

  return (
    <MainFlexContainer back="/expenses/list">
      <div className="w-dvw">
        <MaterialTitleRow />
        {listOfExpenses.map((e, i) => (
          <MaterialListRow data={expenseData[e]} key={i} odd={i % 2} />
        ))}
      </div>
    </MainFlexContainer>
  );
}

export default MaterialsList;
