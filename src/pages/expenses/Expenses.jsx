import { useNavigate } from "react-router-dom";
import InstructionText from "../../ui/InstructionText";
import SquareButton from "../../ui/SquareButton";
import BackButton from "../../ui/BackButton";
import MainFlexContainer from "../../ui/MainFlexContainer";
import SquareButtonRow from "../../ui/SquareButtonRow";

function Expenses() {
  const navigate = useNavigate();
  return (
    <MainFlexContainer back="/">
      <InstructionText text="Add Expense or View Expenses" />
      <SquareButtonRow>
        <SquareButton text="Add" onClick={() => navigate("/expenses/add")} />
        <SquareButton text="View" onClick={() => navigate("/expenses/list")} />
      </SquareButtonRow>
    </MainFlexContainer>
  );
}

export default Expenses;
