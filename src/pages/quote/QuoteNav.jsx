import { useNavigate } from "react-router-dom";
import InstructionText from "../../ui/InstructionText";
import MainFlexContainer from "../../ui/MainFlexContainer";
import SquareButton from "../../ui/SquareButton";
import SquareButtonRow from "../../ui/SquareButtonRow";

function QuoteNav() {
  const navigate = useNavigate();
  //TODO 3/13/2025: maybe make continue go to "Continue Current or Select a different quote"
  return (
    <MainFlexContainer back="/">
      <InstructionText text="Do you want to create, continue, or view a quote?" />
      <SquareButtonRow>
        <SquareButton
          text="Create"
          onClick={() => navigate("/quotes/create")}
        />
        <SquareButton
          text="Continue"
          onClick={() => navigate("/quotes/edit")}
        />
        <SquareButton text="View" onClick={() => navigate("/quotes/view")} />
      </SquareButtonRow>
    </MainFlexContainer>
  );
}

export default QuoteNav;
