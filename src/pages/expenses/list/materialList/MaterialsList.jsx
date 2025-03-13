import { useSelector } from "react-redux";
import MainFlexContainer from "../../../../ui/MainFlexContainer";
import MaterialListRow from "./MaterialListRow";
import MaterialTitleRow from "./MaterialTitleRow";

function MaterialsList() {
  const listOfExpenses = useSelector(
    (state) => state.expense.expenses.materials,
  );
  console.log(listOfExpenses);
  const titleRow = {};
  //TODO 3/12/2025: make a separate title row component
  return (
    <MainFlexContainer back="/expenses/list">
      <div className="w-dvw">
        <MaterialTitleRow />
        {listOfExpenses.map((e, i) => (
          <MaterialListRow data={e} key={i} odd={i % 2} />
        ))}
      </div>
    </MainFlexContainer>
  );
}

export default MaterialsList;
