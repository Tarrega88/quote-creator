import { useParams } from "react-router-dom";
import MainFlexContainer from "../../../ui/MainFlexContainer";

function ChooseExpense() {
  const { expenseType } = useParams();

  return (
    <MainFlexContainer back="/services/add/bridge/expenses">
      {expenseType}
    </MainFlexContainer>
  );
}

export default ChooseExpense;
