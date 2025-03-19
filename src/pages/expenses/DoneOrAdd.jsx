import { useNavigate } from "react-router-dom";
import InstructionText from "../../ui/InstructionText";
import MainFlexContainer from "../../ui/MainFlexContainer";
import SquareButton from "../../ui/SquareButton";
import Subtitle from "../../ui/Subtitle";
import { useSelector } from "react-redux";
import SquareButtonRow from "../../ui/SquareButtonRow";

function DoneOrAdd() {
  const expenseTest = useSelector((state) => state.expense.expenses);

  const navigate = useNavigate();
  return (
    <MainFlexContainer activeBack={false}>
      <InstructionText text="Expense Added!" />
      <Subtitle text="Add another expense, view expenses, or return to home page?" />
      <SquareButtonRow>
        <SquareButton text="Add" onClick={() => navigate("/expenses/add")} />
        <SquareButton text="View" onClick={() => navigate("/expenses/list")} />
        <SquareButton text="Home" onClick={() => navigate("/")} />
      </SquareButtonRow>
    </MainFlexContainer>
  );
}

export default DoneOrAdd;
