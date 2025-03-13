import { useSelector } from "react-redux";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import InstructionText from "../../../ui/InstructionText";
import SquareButton from "../../../ui/SquareButton";
import { useNavigate } from "react-router-dom";

function ExpensesList() {
  const navigate = useNavigate();
  const listOfExpenses = useSelector((state) => state.expense);
  console.log(listOfExpenses);

  return (
    <MainFlexContainer back="/expenses">
      <InstructionText text="Which expense list do you want to see?" />
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <SquareButton
            text="Materials"
            onClick={() => navigate("/expenses/list/materials")}
          />
          <SquareButton
            text="Rentals"
            onClick={() => navigate("/expenses/list/rentals")}
          />
          <SquareButton
            text="Labor"
            onClick={() => navigate("/expenses/list/labor")}
          />
        </div>
        <SquareButton
          text="All"
          onClick={() => navigate("/expenses/list/all")}
        />
      </div>
    </MainFlexContainer>
  );
}

export default ExpensesList;
