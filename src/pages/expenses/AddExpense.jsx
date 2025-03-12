import { useNavigate } from "react-router-dom";
import BackButton from "../../ui/BackButton";
import InstructionText from "../../ui/InstructionText";
import SquareButton from "../../ui/SquareButton";
import Header from "../../ui/Header";
import { useDispatch } from "react-redux";
import { setCurrentExpenseType } from "./expenseSlice";
import MainFlexContainer from "../../ui/MainFlexContainer";

function AddExpense() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //materials, rentals, labor
  function handleExpenseSelection(type) {
    dispatch(setCurrentExpenseType(type));
    navigate(`/expenses/add/${type}`);
  }

  return (
    <MainFlexContainer back="/expenses">
      <Header text="Add Expense" />
      <InstructionText text="Is this a material, labor, or rental expense?" />
      <div className="flex gap-8 pt-4">
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
    </MainFlexContainer>
  );
}

export default AddExpense;
