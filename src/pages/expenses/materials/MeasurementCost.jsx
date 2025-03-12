import { useSelector } from "react-redux";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import InstructionText from "../../../ui/InstructionText";
import { useParams } from "react-router-dom";
import NumberInput from "../../../ui/NumberInput";
import { useState } from "react";

function MeasurementCost() {
  const [dollars, setDollars] = useState(0);
  const [unitAmount, setUnitAmount] = useState(0);

  const measurementType = useSelector(
    (state) => state.material.measurementType,
  );

  const materialName = useSelector((state) => state.material.materialName);

  const back = `/expenses/add/materials/measurements/${measurementType}`;

  const { measurementUnit } = useParams();
  console.log(measurementUnit);

  return (
    <MainFlexContainer back={back}>
      <InstructionText text="How much does it cost?" />
      <div>
        <div>
          It costs
          <NumberInput
            // value={dollars}
            onChange={(e) => setDollars(e.target.value)}
          />
          dollars per{" "}
          <NumberInput onChange={(e) => setUnitAmount(e.target.value)} />
          {measurementUnit} of {materialName}
        </div>
      </div>
    </MainFlexContainer>
  );
}

export default MeasurementCost;
