import { useNavigate } from "react-router-dom";
import InstructionText from "../../ui/InstructionText";
import SquareButton from "../../ui/SquareButton";
import Header from "../../ui/Header";
import { useDispatch } from "react-redux";
import { setCurrentExpenseType } from "../../store/slices/expenseSlice";
import MainFlexContainer from "../../ui/MainFlexContainer";
import SquareButtonRow from "../../ui/SquareButtonRow";

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
      <SquareButtonRow>
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
      </SquareButtonRow>
    </MainFlexContainer>
  );
}

export default AddExpense;
