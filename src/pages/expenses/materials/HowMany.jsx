import { useSelector } from "react-redux";
import InstructionText from "../../../ui/InstructionText";
import TextInput from "../../../ui/TextInput";
import NumberInput from "../../../ui/NumberInput";
import { useParams } from "react-router-dom";
import MainFlexContainer from "../../../ui/MainFlexContainer";

function HowMany() {
  //   const materialType = useSelector(
  //     (state) => state.expense.currentExpense.name,
  //   );

  const measurementType = useSelector(
    (state) => state.expense.currentExpense.measurementType,
  );

  const { measurementUnit } = useParams();
  console.log(measurementUnit);

  return (
    <MainFlexContainer to="">
      <div>Choose Cost</div>
    </MainFlexContainer>
    // <div className="space-y-2">
    //   <InstructionText text="Choose the cost" />
    //   <div className="flex items-center gap-2">
    //     <span>It costs</span>
    //     <NumberInput />
    //     <span>dollars per</span>
    //     <NumberInput />
    //     <span>{/* {measurementType} of {materialType}. */}</span>
    //   </div>
    // </div>
  );
}

export default HowMany;
