import { useNavigate, useParams } from "react-router-dom";
import MainFlexContainer from "../../../../ui/MainFlexContainer";
import { unitsOfMeasurement } from "../../../../helpers/measurementTextToLink";
import InstructionText from "../../../../ui/InstructionText";
import { useSelector } from "react-redux";
import SquareButtonRow from "../../../../ui/SquareButtonRow";
import SquareButton from "../../../../ui/SquareButton";
import MeasurementUnit from "./MeasurementUnit";

function MeasurementType() {
  const serviceName = useSelector((state) => state.service.current.serviceName);
  console.log(serviceName);

  return (
    <MainFlexContainer back="/services/add/price_model/measurement">
      <InstructionText text={`What is the ${serviceName} measured in?`} />
      <MeasurementUnit />
    </MainFlexContainer>
  );
}

export default MeasurementType;
