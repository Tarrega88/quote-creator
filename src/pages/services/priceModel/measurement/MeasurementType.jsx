import { useParams } from "react-router-dom";
import MainFlexContainer from "../../../../ui/MainFlexContainer";
import InstructionText from "../../../../ui/InstructionText";
import MeasurementUnit from "./MeasurementUnit";

function MeasurementType() {
  const { measurementType } = useParams();

  return (
    <MainFlexContainer back="/services/add/price_model/measurement">
      <InstructionText text={`What is the ${measurementType} measured in?`} />
      <MeasurementUnit />
    </MainFlexContainer>
  );
}

export default MeasurementType;
