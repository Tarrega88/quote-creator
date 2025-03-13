import { useSelector } from "react-redux";
import MainFlexContainer from "../../../../ui/MainFlexContainer";
import RentalListRow from "./RentalListRow";
import RentalTitleRow from "./RentalTitleRow";

function RentalsList() {
  const listOfExpenses = useSelector((state) => state.expense.expenses.rentals);

  return (
    <MainFlexContainer back="/expenses/list">
      <div className="w-dvw">
        <RentalTitleRow />
        {listOfExpenses.map((e, i) => (
          <RentalListRow data={e} key={i} odd={i % 2} />
        ))}
      </div>
    </MainFlexContainer>
  );
}

export default RentalsList;
