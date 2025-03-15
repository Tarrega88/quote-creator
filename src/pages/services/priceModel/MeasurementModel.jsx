import { useNavigate } from "react-router-dom";
import InstructionText from "../../../ui/InstructionText";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import SquareButton from "../../../ui/SquareButton";
import SquareButtonRow from "../../../ui/SquareButtonRow";

function MeasurementModel() {
  const navigate = useNavigate();
  function confirmMeasurementType(type) {
    navigate(`/services/add/price_model/measurement/${type}`);
  }

  return (
    <MainFlexContainer back="/services/add/price_model">
      <InstructionText text="What type of measurement?" />
      <SquareButtonRow>
        <SquareButton
          text="Length"
          onClick={() => confirmMeasurementType("length")}
        />
        <SquareButton
          text="Area"
          onClick={() => confirmMeasurementType("area")}
        />
      </SquareButtonRow>

      <SquareButtonRow>
        <SquareButton
          text="Volume"
          onClick={() => confirmMeasurementType("volume")}
        />
        <SquareButton
          text="Weight"
          onClick={() => confirmMeasurementType("weight")}
        />
      </SquareButtonRow>
    </MainFlexContainer>
  );
}

export default MeasurementModel;
