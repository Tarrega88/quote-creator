import { useDispatch, useSelector } from "react-redux";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import InstructionText from "../../../ui/InstructionText";
import { useNavigate, useParams } from "react-router-dom";
import NumberInput from "../../../ui/NumberInput";
import { useState } from "react";
import AcceptButton from "../../../ui/AcceptButton";
import { addToExpenses } from "../../../store/slices/expenseSlice";

function MeasurementCost() {
  const [dollars, setDollars] = useState(0);
  const [unitAmount, setUnitAmount] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const measurementType = useSelector(
    (state) => state.material.measurementType,
  );

  const materialName = useSelector((state) => state.material.materialName);

  const back = `/expenses/add/materials/measurements/${measurementType}`;

  const { measurementUnit } = useParams();
  const measurementUnitSpaces = measurementUnit.replaceAll("_", " ");

  const test = useSelector((state) => state.expense);

  console.log(test);

  const materialExpense = {
    expenseType: "materials",
    materialName,
    measurementType,
    measurementUnit: measurementUnitSpaces,
    costInDollars: dollars,
    unitAmount,
  };

  function handleClick() {
    if (dollars > 0 && unitAmount > 0) {
      dispatch(addToExpenses(materialExpense));
      navigate("/expenses/added");
    } else {
      return;
    }
  }

  function handleOnEnter(e) {
    console.log(e);
    if (dollars > 0 && unitAmount > 0 && e.key === "Enter") {
      dispatch(addToExpenses(materialExpense));
      navigate("/expenses/added");
    } else {
      return;
    }
  }

  return (
    <MainFlexContainer back={back}>
      <InstructionText text="How much does it cost?" />
      {/* <Subtitle text="(Try to enter the smallest amount you're able to buy it in)" /> */}
      <div className="flex gap-2">
        <span>It costs</span>
        <NumberInput
          onChange={(e) => setDollars(Number(e.target.value))}
          onEnter={handleOnEnter}
        />
        <span>dollars per</span>
        <NumberInput
          onChange={(e) => setUnitAmount(Number(e.target.value))}
          onEnter={handleOnEnter}
        />
        <span>
          {measurementUnitSpaces} of {materialName}
        </span>
      </div>
      <AcceptButton
        isActive={dollars > 0 && unitAmount > 0}
        onClick={handleClick}
      />
    </MainFlexContainer>
  );
}

export default MeasurementCost;
