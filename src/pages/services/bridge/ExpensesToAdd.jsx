import { useNavigate } from "react-router-dom";
import InstructionText from "../../../ui/InstructionText";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import SquareButton from "../../../ui/SquareButton";
import SquareButtonRow from "../../../ui/SquareButtonRow";

function ExpensesToAdd() {
  const navigate = useNavigate();

  return (
    <MainFlexContainer back="/services/add/bridge">
      <InstructionText text="What kind of expense do you want to add?" />
      <SquareButtonRow>
        <SquareButton
          text="Material"
          onClick={() => navigate("/services/add/bridge/expenses/materials")}
        />
        <SquareButton
          text="Labor"
          onClick={() => navigate("/services/add/bridge/expenses/labor")}
        />
        <SquareButton
          text="Rental"
          onClick={() => navigate("/services/add/bridge/expenses/rentals")}
        />
      </SquareButtonRow>
    </MainFlexContainer>
  );
}

export default ExpensesToAdd;
