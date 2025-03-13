import { useNavigate } from "react-router-dom";
import InstructionText from "../../../ui/InstructionText";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import SquareButton from "../../../ui/SquareButton";
import Subtitle from "../../../ui/Subtitle";

function DoneOrAdd() {
  const navigate = useNavigate();
  return (
    <MainFlexContainer activeBack={false}>
      <InstructionText text="Expense Added!" />
      <Subtitle text="Add another expense or return to home page?" />
      <div className="flex gap-12">
        <SquareButton text="Add" onClick={() => navigate("/expenses/add")} />
        <SquareButton text="Home" onClick={() => navigate("/")} />
      </div>
    </MainFlexContainer>
  );
}

export default DoneOrAdd;
