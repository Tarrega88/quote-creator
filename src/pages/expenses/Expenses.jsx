import { useNavigate } from "react-router-dom";
import InstructionText from "../../ui/InstructionText";
import SquareButton from "../../ui/SquareButton";

function Expenses() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center pt-8">
      <div className="flex flex-col items-center gap-8">
        <InstructionText text="Add Expense or View Expenses" />
        <div className="flex gap-16">
          <SquareButton text="Add" onClick={() => navigate("/expenses/add")} />
          <SquareButton
            text="View"
            onClick={() => navigate("/expenses/view")}
          />
        </div>
      </div>
    </div>
  );
}

export default Expenses;
