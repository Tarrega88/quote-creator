import { useSelector } from "react-redux";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import InstructionText from "../../../ui/InstructionText";
import SquareButton from "../../../ui/SquareButton";
import { useNavigate } from "react-router-dom";
import SquareButtonRow from "../../../ui/SquareButtonRow";

function ExpensesList() {
  const navigate = useNavigate();
  const listOfExpenses = useSelector((state) => state.expense);

  return (
    <MainFlexContainer back="/expenses">
      <InstructionText text="Which expense list do you want to see?" />
      <SquareButtonRow>
        <SquareButton
          text="Material"
          onClick={() => navigate("/expenses/list/materials")}
        />
        <SquareButton
          text="Labor"
          onClick={() => navigate("/expenses/list/labor")}
        />
        <SquareButton
          text="Rental"
          onClick={() => navigate("/expenses/list/rentals")}
        />
      </SquareButtonRow>
    </MainFlexContainer>
  );
}

export default ExpensesList;
