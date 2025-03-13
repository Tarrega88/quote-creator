import { useSelector } from "react-redux";
import MainFlexContainer from "../../../ui/MainFlexContainer";

function AllList() {
  const listOfExpenses = useSelector((state) => state.expense.expenses);
  console.log(listOfExpenses);
  return <MainFlexContainer back="/expenses/list"></MainFlexContainer>;
}

export default AllList;
