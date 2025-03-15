import { useParams } from "react-router-dom";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import { useDispatch, useSelector } from "react-redux";
import ServiceExpenseList from "./ServiceExpenseList";
import ServiceExpenseRow from "./ServiceExpenseRow";
import { useState } from "react";
import AcceptButton from "../../../ui/AcceptButton";
import InstructionText from "../../../ui/InstructionText";
import { pushToServiceExpenses } from "../../../store/slices/serviceSlice";

function ChooseExpense() {
  const dispatch = useDispatch();
  const { expenseType } = useParams();

  console.log(`expenseType: ${expenseType}`);

  const grammar =
    expenseType.at(-1) === "s" ? expenseType.slice(0, -1) : expenseType;

  const [addedExpenses, setAddedExpenses] = useState([]);

  const serviceName = useSelector((state) => state.service.current.serviceName);

  const expenseData = useSelector(
    (state) => state.expense.expenses[expenseType],
  );
  //   console.log(expenseData);
  const expenseNames = expenseData
    .map((e) => e.expenseName)
    .filter((e) => !addedExpenses.includes(e));

  function addExpense(expense) {
    console.log(expense);
    setAddedExpenses([...addedExpenses, expense].sort());
  }

  function removeExpense(expense) {
    setAddedExpenses(addedExpenses.filter((e) => e !== expense));
  }

  const test = useSelector((state) => state.service);
  function handleAccept() {
    dispatch(
      pushToServiceExpenses({
        expenseType,
        expenses: addedExpenses,
      }),
    );
    //Maybe switch the logic from pushing to be a key instead? probably faster and easier to delete later
    //TODO: maybe also add the service name to somewhere in expense logic in an array or object, so that if the expense is deleted, it can easily be deleted from the service logic
    //TODO: add navigate here to ask if more expenses should be added
  }
  console.log(test);

  return (
    <MainFlexContainer back="/services/add/bridge/expenses">
      <InstructionText
        text={`Which ${grammar} expenses are part of ${serviceName}?`}
      />
      <div className="grid w-dvw grid-cols-2">
        <ServiceExpenseList>
          <div className="pb-2">Available Expenses</div>
          {expenseNames.map((e, i) => (
            <ServiceExpenseRow
              expenseName={e}
              key={i}
              even={i % 2}
              onClick={() => addExpense(e)}
            />
          ))}
        </ServiceExpenseList>
        <ServiceExpenseList>
          <div className="pb-2">{serviceName} expenses</div>
          {addedExpenses.map((e, i) => (
            <ServiceExpenseRow
              expenseName={e}
              key={i}
              even={i % 2}
              onClick={() => removeExpense(e)}
            />
          ))}
        </ServiceExpenseList>
      </div>
      <AcceptButton onClick={handleAccept} />
    </MainFlexContainer>
  );
}

export default ChooseExpense;
