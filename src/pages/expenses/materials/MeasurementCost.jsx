import { useSelector } from "react-redux";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import InstructionText from "../../../ui/InstructionText";
import { useParams } from "react-router-dom";
import NumberInput from "../../../ui/NumberInput";
import { useState } from "react";
import Subtitle from "../../../ui/Subtitle";
import AcceptButton from "../../../ui/AcceptButton";

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
      {/* <Subtitle text="(Try to enter the smallest amount you're able to buy it in)" /> */}
      {/* <div> */}
      <div className="flex gap-2">
        <span>It costs</span>
        <NumberInput
          // value={dollars}
          onChange={(e) => setDollars(e.target.value)}
        />
        <span>dollars per</span>
        <NumberInput onChange={(e) => setUnitAmount(e.target.value)} />
        <span>
          {measurementUnit} of {materialName}
        </span>
      </div>
      {/* </div> */}
      <AcceptButton isActive={dollars > 0 && unitAmount > 0} />
    </MainFlexContainer>
  );
}

export default MeasurementCost;
