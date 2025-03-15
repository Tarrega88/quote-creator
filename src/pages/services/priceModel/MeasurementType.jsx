import { useParams } from "react-router-dom";
import MainFlexContainer from "../../../ui/MainFlexContainer";

function MeasurementType() {
  const { measurementType } = useParams();

  return (
    <MainFlexContainer back="/services/add/price_model/measurement"></MainFlexContainer>
  );
}

export default MeasurementType;
