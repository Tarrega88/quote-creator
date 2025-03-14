import { useSelector } from "react-redux";
import InstructionText from "../ui/InstructionText";
import Subtitle from "../ui/Subtitle";
import SquareButton from "../ui/SquareButton";
import { useNavigate } from "react-router-dom";
import SquareButtonRow from "../ui/SquareButtonRow";
import MainFlexContainer from "../ui/MainFlexContainer";

function JobAdded() {
  const client = useSelector((state) => state.quote.client);
  const navigate = useNavigate();

  return client.length > 0 ? (
    <MainFlexContainer back="/">
      <InstructionText text="Job Added!" />
      <Subtitle text={`Add another job to ${client}'s quote or view quote?`} />
      <SquareButtonRow>
        <SquareButton text="Add Job" onClick={() => navigate("/edit")} />
        <SquareButton text="View Quote" />
      </SquareButtonRow>
    </MainFlexContainer>
  ) : (
    <MainFlexContainer back="/">
      <InstructionText text="Looks like there's quote being worked on yet." />
      <SquareButton text="Home" onClick={() => navigate("/")} />
    </MainFlexContainer>
  );
}

export default JobAdded;
