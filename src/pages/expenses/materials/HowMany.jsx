import { useSelector } from "react-redux";
import InstructionText from "../../../ui/InstructionText";
import TextInput from "../../../ui/TextInput";
import NumberInput from "../../../ui/NumberInput";

function HowMany({ measurementType }) {
  const materialType = useSelector(
    (state) => state.expense.currentExpense.name,
  );

  return (
    <div className="space-y-2">
      <InstructionText text="Choose the cost" />
      <div className="flex items-center gap-2">
        <span>It costs</span>
        <NumberInput />
        <span>dollars per</span>
        <NumberInput />
        <span>
          {measurementType} of {materialType}.
        </span>
      </div>
    </div>
  );
}

export default HowMany;
