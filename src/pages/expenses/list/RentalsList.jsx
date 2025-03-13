import { useSelector } from "react-redux";
import MainFlexContainer from "../../../ui/MainFlexContainer";

function RentalsList() {
  const listOfExpenses = useSelector((state) => state.expense.expenses.rentals);
  console.log(listOfExpenses);
  return <MainFlexContainer back="/expenses/list"></MainFlexContainer>;
}

export default RentalsList;
