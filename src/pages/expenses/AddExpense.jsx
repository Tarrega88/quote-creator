import { useNavigate } from "react-router-dom";
import BackButton from "../../ui/BackButton";
import InstructionText from "../../ui/InstructionText";
import SquareButton from "../../ui/SquareButton";
import Header from "../../ui/Header";
import { useDispatch } from "react-redux";
import { setCurrentExpenseType } from "./expenseSlice";

function AddExpense() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //materials, rentals, labor
  function handleExpenseSelection(type) {
    console.log(type);
    dispatch(setCurrentExpenseType(type));
    navigate(`/expenses/add/${type}`);
  }

  return (
    <div>
      <BackButton onClick={() => navigate("/expenses")} />
      <div className="flex justify-center">
        <div className="flex flex-col items-center pt-8">
          <Header text="Add Expense" />
          <InstructionText text="Is this a material, labor, or rental expense?" />
          <div className="flex gap-8 pt-8">
            <SquareButton
              text="Material"
              onClick={() => handleExpenseSelection("materials")}
            />
            <SquareButton
              text="Labor"
              onClick={() => handleExpenseSelection("labor")}
            />
            <SquareButton
              text="Rental"
              onClick={() => handleExpenseSelection("rentals")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddExpense;
