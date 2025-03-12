import { useNavigate } from "react-router-dom";
import InstructionText from "../../../ui/InstructionText";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import SquareButton from "../../../ui/SquareButton";

function Measurements() {
  const navigate = useNavigate();
  return (
    <MainFlexContainer back="/expenses/add/materials">
      <InstructionText text="What type of measurement?" />
      <div className="flex gap-12">
        <SquareButton
          text="Length"
          onClick={() =>
            navigate("/expenses/add/materials/measurements/length")
          }
        />
        <SquareButton
          text="Area"
          onClick={() => navigate("/expenses/add/materials/measurements/area")}
        />
        <SquareButton
          text="Volume"
          onClick={() =>
            navigate("/expenses/add/materials/measurements/volume")
          }
        />
      </div>
      <div className="flex gap-12">
        <SquareButton
          text="Weight"
          onClick={() =>
            navigate("/expenses/add/materials/measurements/weight")
          }
        />
        <SquareButton
          text="Quantity"
          onClick={() =>
            navigate("/expenses/add/materials/measurements/quantity")
          }
        />
      </div>
    </MainFlexContainer>
  );
}

export default Measurements;
