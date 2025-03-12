import { useDispatch, useSelector } from "react-redux";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import InstructionText from "../../../ui/InstructionText";
import { useParams } from "react-router-dom";
import NumberInput from "../../../ui/NumberInput";
import { useState } from "react";
import AcceptButton from "../../../ui/AcceptButton";
import { addToExpenses } from "../../../store/slices/expenseSlice";

function MeasurementCost() {
  const [dollars, setDollars] = useState(0);
  const [unitAmount, setUnitAmount] = useState(0);
  const dispatch = useDispatch();

  const measurementType = useSelector(
    (state) => state.material.measurementType,
  );

  const materialName = useSelector((state) => state.material.materialName);

  const back = `/expenses/add/materials/measurements/${measurementType}`;

  const { measurementUnit } = useParams();

  const test = useSelector((state) => state.expense);

  console.log(test);

  const materialExpense = {
    expenseType: "materials",
    materialName,
    measurementType,
    measurementUnit,
    costInDollars: dollars,
    unitAmount,
  };

  function handleClick() {
    if (dollars > 0 && unitAmount > 0) {
      dispatch(addToExpenses(materialExpense));
    } else {
      return;
    }
  }

  return (
    <MainFlexContainer back={back}>
      <InstructionText text="How much does it cost?" />
      {/* <Subtitle text="(Try to enter the smallest amount you're able to buy it in)" /> */}
      {/* <div> */}
      <div className="flex gap-2">
        <span>It costs</span>
        <NumberInput
          // value={dollars}
          onChange={(e) => setDollars(Number(e.target.value))}
        />
        <span>dollars per</span>
        <NumberInput onChange={(e) => setUnitAmount(Number(e.target.value))} />
        <span>
          {measurementUnit} of {materialName}
        </span>
      </div>
      {/* </div> */}
      <AcceptButton
        isActive={dollars > 0 && unitAmount > 0}
        onClick={handleClick}
      />
    </MainFlexContainer>
  );
}

export default MeasurementCost;
