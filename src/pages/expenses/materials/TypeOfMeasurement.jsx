import { useNavigate, useParams } from "react-router-dom";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import UnitOfMeasurement from "./UnitOfMeasurement";
import InstructionText from "../../../ui/InstructionText";
import { useSelector } from "react-redux";

const texts = {
  length: "measured",
  area: "measured",
  volume: "measured",
  weight: "weighed",
  quantity: "counted",
};

function TypeOfMeasurement() {
  const navigate = useNavigate();

  const { measurementType } = useParams();

  const materialName = useSelector((state) => state.material.expenseName);

  const verbText = texts[measurementType];

  const text =
    measurementType === "quantity"
      ? "Click Count"
      : `What is ${materialName} ${verbText} in?`;

  function handleSetMeasurementType(type) {
    navigate(`/expenses/add/materials/measurements/${measurementType}/${type}`);
  }
  return (
    <MainFlexContainer back="/expenses/add/materials/measurements">
      <InstructionText text={text} />
      <UnitOfMeasurement chooseUnitOfMeasurement={handleSetMeasurementType} />
    </MainFlexContainer>
  );
}

export default TypeOfMeasurement;
