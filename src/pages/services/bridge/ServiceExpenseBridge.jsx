import { useSelector } from "react-redux";
import InstructionText from "../../../ui/InstructionText";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import Dropdown from "../../../ui/Dropdown";
import Subtitle from "../../../ui/Subtitle";
import SquareButtonRow from "../../../ui/SquareButtonRow";
import SquareButton from "../../../ui/SquareButton";
import { useNavigate } from "react-router-dom";

const expenseOptions = ["", "materials", "rentals", "labor"];

function ServiceExpenseBridge() {
  const serviceName = useSelector((state) => state.service.current.serviceName);
  const navigate = useNavigate();
  //this is probably going to have a conditional return for the whole component, and will first
  //start by asking the user if they want to add any expenses to the service
  //if not it will navigate furter
  //if so it will have a dropdown to choose expense type and then add expenses

  return (
    <MainFlexContainer back="/services/add/category">
      <InstructionText
        text={`Do you want to add any expenses to ${serviceName}?`}
      />
      <Subtitle text="(This can be done later too)" />
      <SquareButtonRow>
        <SquareButton
          text="Yes"
          onClick={() => navigate("/services/add/bridge/expenses")}
        />
        <SquareButton
          text="No"
          onClick={() => navigate("/services/add/price_model")}
        />
      </SquareButtonRow>
    </MainFlexContainer>
  );
}

export default ServiceExpenseBridge;
