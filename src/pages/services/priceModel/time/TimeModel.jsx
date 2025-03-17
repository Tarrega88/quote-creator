import { useSelector } from "react-redux";
import InstructionText from "../../../../ui/InstructionText";
import MainFlexContainer from "../../../../ui/MainFlexContainer";
import SquareButtonRow from "../../../../ui/SquareButtonRow";
import SquareButton from "../../../../ui/SquareButton";
import { useNavigate } from "react-router-dom";

function TimeModel() {
  const serviceName = useSelector((state) => state.service.current.serviceName);
  const navigate = useNavigate();
  return (
    <MainFlexContainer back="/services/add/price_model">
      <InstructionText text={`${serviceName} is charged by the...`} />
      <SquareButtonRow>
        <SquareButton
          text="Hour"
          onClick={() => navigate("/services/add/price_model/time/hour")}
        />
        <SquareButton
          text="Day"
          onClick={() => navigate("/services/add/price_model/time/day")}
        />
        <SquareButton
          text="Week"
          onClick={() => navigate("/services/add/price_model/time/week")}
        />
      </SquareButtonRow>
    </MainFlexContainer>
  );
}

export default TimeModel;
