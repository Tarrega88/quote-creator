import { useSelector } from "react-redux";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import MaterialListRow from "./MaterialListRow";

function MaterialsList() {
  const listOfExpenses = useSelector(
    (state) => state.expense.expenses.materials,
  );
  console.log(listOfExpenses);
  const titleRow = {};
  return (
    <MainFlexContainer back="/expenses/list">
      <MaterialListRow data={titleRow} />
      <div className="w-dvw">
        {listOfExpenses.map((e, i) => (
          <MaterialListRow data={e} key={i} />
        ))}
      </div>
    </MainFlexContainer>
  );
}

export default MaterialsList;
