import { useNavigate } from "react-router-dom";
import InstructionText from "../../../ui/InstructionText";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import SquareButton from "../../../ui/SquareButton";
import { setType } from "../../../store/slices/measurementSlice";
import { useDispatch } from "react-redux";
import { setMeasurementType } from "../../../store/slices/materialSlice";

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
      <div className="flex gap-12">
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
      </div>
      <div className="flex gap-12">
        <SquareButton
          text="Weight"
          onClick={() => confirmMeasurementType("weight")}
        />
        <SquareButton
          text="Quantity"
          onClick={() => confirmMeasurementType("quantity")}
        />
      </div>
    </MainFlexContainer>
  );
}

export default Measurements;
