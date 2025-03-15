import { useSelector } from "react-redux";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import InstructionText from "../../../ui/InstructionText";
import SquareButtonRow from "../../../ui/SquareButtonRow";
import SquareButton from "../../../ui/SquareButton";
import Subtitle from "../../../ui/Subtitle";
import { useNavigate } from "react-router-dom";

function PriceModel() {
  const navigate = useNavigate();
  const serviceData = useSelector((state) => state.service);
  console.log(serviceData);

  const serviceName = serviceData.current.serviceName;

  return (
    <MainFlexContainer back="/services/add/bridge">
      <InstructionText
        text={`How do you determine your pay for the ${serviceName} service?`}
      />
      <Subtitle text="(Not including expenses)" />
      <SquareButtonRow>
        <SquareButton
          text="Measurement"
          onClick={() => navigate("/services/add/price_model/measurement")}
        />
        <SquareButton
          text="Time"
          onClick={() => navigate("/services/add/price_model/time")}
        />
        <SquareButton
          text="Flat Rate"
          onClick={() => navigate("/services/add/price_model/flat")}
        />
      </SquareButtonRow>
    </MainFlexContainer>
  );
}

export default PriceModel;
