import { useNavigate } from "react-router-dom";
import InstructionText from "../../ui/InstructionText";
import MainFlexContainer from "../../ui/MainFlexContainer";
import SquareButtonRow from "../../ui/SquareButtonRow";
import SquareButton from "../../ui/SquareButton";

function Services() {
  const navigate = useNavigate();
  return (
    <MainFlexContainer back="/">
      <InstructionText text="Add or View Services" />
      <SquareButtonRow>
        <SquareButton text="Add" onClick={() => navigate("/services/add")} />
        <SquareButton text="View" onClick={() => navigate("/services/list")} />
      </SquareButtonRow>
    </MainFlexContainer>
  );
}

export default Services;
