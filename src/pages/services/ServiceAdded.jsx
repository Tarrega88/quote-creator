import { useNavigate } from "react-router-dom";
import InstructionText from "../../ui/InstructionText";
import MainFlexContainer from "../../ui/MainFlexContainer";
import SquareButton from "../../ui/SquareButton";
import SquareButtonRow from "../../ui/SquareButtonRow";

function ServiceAdded() {
  const navigate = useNavigate();
  return (
    <MainFlexContainer activeBack={false}>
      <InstructionText text="Service Added!" />
      <InstructionText text="Would you like to add another service or return to the home page?" />
      <SquareButtonRow>
        <SquareButton text="Add" onClick={() => navigate("/services/add")} />
        <SquareButton text="Home" onClick={() => navigate("/")} />
      </SquareButtonRow>
    </MainFlexContainer>
  );
}

export default ServiceAdded;
