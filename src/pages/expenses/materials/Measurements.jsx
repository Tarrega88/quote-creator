import { useNavigate } from "react-router-dom";
import InstructionText from "../../../ui/InstructionText";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import SquareButton from "../../../ui/SquareButton";
import { useDispatch } from "react-redux";
import { setMeasurementType } from "../../../store/slices/materialSlice";
import SquareButtonRow from "../../../ui/SquareButtonRow";

function Measurements() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function confirmMeasurementType(type) {
    // dispatch(setType(type));
    dispatch(setMeasurementType(type));
    navigate(`/expenses/add/materials/measurements/${type}`);
  }

  return (
    <MainFlexContainer back="/expenses/add/materials">
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
        <SquareButton
          text="Volume"
          onClick={() => confirmMeasurementType("volume")}
        />
      </SquareButtonRow>
      <SquareButtonRow>
        <SquareButton
          text="Weight"
          onClick={() => confirmMeasurementType("weight")}
        />
        <SquareButton
          text="Quantity"
          onClick={() => confirmMeasurementType("quantity")}
        />
      </SquareButtonRow>
    </MainFlexContainer>
  );
}

export default Measurements;
