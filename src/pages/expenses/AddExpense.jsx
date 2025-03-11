import { useNavigate } from "react-router-dom";
import BackButton from "../../ui/BackButton";
import InstructionText from "../../ui/InstructionText";
import SquareButton from "../../ui/SquareButton";

function AddExpense() {
  const navigate = useNavigate();
  return (
    <div>
      <BackButton onClick={() => navigate("/expenses")} />
      <div className="flex justify-center">
        <div className="flex flex-col items-center pt-8">
          <InstructionText text="Is this a material, labor, or rental expense?" />
          <div className="flex gap-8 pt-8">
            <SquareButton
              text="Material"
              onClick={() => navigate("/expenses/add/materials")}
            />
            <SquareButton
              text="Labor"
              onClick={() => navigate("/expenses/add/labor")}
            />
            <SquareButton
              text="Rental"
              onClick={() => navigate("/expenses/add/rentals")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddExpense;
