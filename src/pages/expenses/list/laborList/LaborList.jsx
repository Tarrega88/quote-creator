import { useSelector } from "react-redux";
import MainFlexContainer from "../../../../ui/MainFlexContainer";

function LaborList() {
  const listOfExpenses = useSelector((state) => state.expense.expenses.labor);
  console.log(listOfExpenses);

  return <MainFlexContainer back="/expenses/list"></MainFlexContainer>;
}

export default LaborList;
