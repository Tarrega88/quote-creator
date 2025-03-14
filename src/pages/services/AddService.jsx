import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainFlexContainer from "../../ui/MainFlexContainer";

function AddService() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return <MainFlexContainer back="/services"></MainFlexContainer>;
}

export default AddService;

{
  /*
    
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
    */
}
