import InstructionText from "../../ui/InstructionText";
import MainFlexContainer from "../../ui/MainFlexContainer";
import SquareButton from "../../ui/SquareButton";
import SquareButtonRow from "../../ui/SquareButtonRow";

function QuoteNav() {
  return (
    <MainFlexContainer back="/">
      <InstructionText text="Do you want to create, continue, or view a quote?" />
      <SquareButtonRow>
        <SquareButton text="Create" />
        <SquareButton text="Continue" />
        <SquareButton text="View" />
      </SquareButtonRow>
    </MainFlexContainer>
  );
}

export default QuoteNav;
