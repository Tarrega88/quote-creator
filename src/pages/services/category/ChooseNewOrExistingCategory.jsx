import { useNavigate } from "react-router-dom";
import InstructionText from "../../../ui/InstructionText";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import SquareButton from "../../../ui/SquareButton";
import SquareButtonRow from "../../../ui/SquareButtonRow";
import Subtitle from "../../../ui/Subtitle";
import { useSelector } from "react-redux";

function ChooseNewOrExistingCategory() {
  const navigate = useNavigate();

  const serviceName = useSelector((state) => state.service.current.serviceName);

  return (
    <MainFlexContainer back="/services/add">
      <InstructionText
        text={`Will ${serviceName} belong to a new or existing category?`}
      />
      <Subtitle text="(ex. Installation, Grading, Survey)" />
      <SquareButtonRow>
        <SquareButton
          text="New"
          onClick={() => navigate("/services/add/category/new")}
        />
        <SquareButton
          text="Existing"
          onClick={() => navigate("/services/add/category/existing")}
        />
      </SquareButtonRow>
    </MainFlexContainer>
  );
}

export default ChooseNewOrExistingCategory;
