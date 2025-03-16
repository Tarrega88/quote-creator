import { useNavigate, useParams } from "react-router-dom";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import { useDispatch, useSelector } from "react-redux";
import ServiceExpenseList from "./ServiceExpenseList";
import ServiceExpenseRow from "./ServiceExpenseRow";
import { useState } from "react";
import AcceptButton from "../../../ui/AcceptButton";
import InstructionText from "../../../ui/InstructionText";
import {
  addToServiceExpenses,
  removeFromServiceExpenses,
} from "../../../store/slices/serviceSlice";

function ChooseExpense() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { expenseType } = useParams();

  console.log(`expenseType: ${expenseType}`);
  // console.log(`expenseType: ${expenseType}`);
  //TODO: I think I might make an edit version of this page, or put in some conditional logic on this one.
  //If it's an edit, it should check the service slice instead of using an empty array

  const grammar =
    expenseType.at(-1) === "s" ? expenseType.slice(0, -1) : expenseType;

  // const [addedExpenses, setAddedExpenses] = useState([]);

  const serviceName = useSelector((state) => state.service.current.serviceName);
  console.log(`serviceName: ${serviceName}`);
  const categoryName = useSelector(
    (state) => state.service.current.serviceCategory,
  );

  console.log(`categoryName: ${categoryName}`);

  const addedExpenseData = useSelector(
    (state) =>
      state.service.services[categoryName][serviceName].serviceExpenses[
        expenseType
      ],
  );

  const addedExpenses = Object.keys(addedExpenseData);

  console.log(`addedExpenses:`);
  console.log(addedExpenses);

  const expenseData = useSelector(
    (state) => state.expense.expenses[expenseType],
  );

  console.log(`expenseData:`);
  console.log(expenseData);

  //   console.log(expenseData);
  const expenseNames = Object.keys(expenseData).filter(
    (e) => !addedExpenses.includes(e),
  );

  console.log(`expenseNames: ${expenseNames}`);

  function addExpense(expense) {
    console.log("HERE");
    console.log(expense);
    dispatch(addToServiceExpenses({ expense, expenseType }));
    // setAddedExpenses([...addedExpenses, expense].sort());
  }

  function removeExpense(expense) {
    console.log(expense);
    dispatch(removeFromServiceExpenses({ expense, expenseType }));
    // setAddedExpenses(addedExpenses.filter((e) => e !== expense));
  }

  const test = useSelector((state) => state.service);
  function handleAccept() {
    // dispatch(
    //   pushToServiceExpenses({
    //     expenseType,
    //     expenses: addedExpenses,
    //   }),
    dispatch(
      addToServiceExpenses({
        expenseType,
        expenses: addedExpenses,
      }),
    );
    // navigate("/services/add/price_model"),
    navigate("/services/add/bridge");

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
