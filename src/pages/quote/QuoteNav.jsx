import { useNavigate } from "react-router-dom";
import InstructionText from "../../ui/InstructionText";
import MainFlexContainer from "../../ui/MainFlexContainer";
import SquareButton from "../../ui/SquareButton";
import SquareButtonRow from "../../ui/SquareButtonRow";
import { useSelector } from "react-redux";

function QuoteNav() {
  const navigate = useNavigate();

  const activeClient = useSelector((state) => state.client.activeClient);
  console.log(activeClient);
  const text = activeClient
    ? "Start new quote, continue current quote, or select one"
    : "Start a new quote or select one";
  //TODO 3/13/2025: maybe make continue go to "Continue Current or Select a different quote"
  return (
    <MainFlexContainer back="/">
      <InstructionText text={text} />
      <SquareButtonRow>
        <SquareButton text="New" onClick={() => navigate("/quotes/create")} />
        {activeClient && <SquareButton text="Continue" />}
        <SquareButton text="Select" />
      </SquareButtonRow>
    </MainFlexContainer>
  );
}

export default QuoteNav;
