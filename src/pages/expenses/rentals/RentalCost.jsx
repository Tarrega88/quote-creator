import { useNavigate, useParams } from "react-router-dom";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToExpenses } from "../../../store/slices/expenseSlice";
import InstructionText from "../../../ui/InstructionText";
import AcceptButton from "../../../ui/AcceptButton";
import NumberInput from "../../../ui/NumberInput";

function RentalCost() {
  const { paidByThe } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pay, setPay] = useState(0);

  const rentalName = useSelector((state) => state.rental.expenseName);

  const expenseToAdd = {
    expenseType: "rentals",
    expenseName: rentalName,
    costInDollars: pay,
    paidByThe,
  };

  const text =
    paidByThe === "flat"
      ? "What's the flat rate?"
      : `What's the rental fee per ${paidByThe}?`;

  function handleConfirmPay() {
    if (pay <= 0) return;
    dispatch(addToExpenses(expenseToAdd));
    navigate("/expenses/added");
  }

  return (
    <MainFlexContainer back="/expenses/add/rentals/time">
      <InstructionText text={text} />
      <div className="flex gap-2">
        <span>$</span>
        <NumberInput
          onChange={(e) => setPay(Number(e.target.value))}
          onEnter={handleConfirmPay}
        />
      </div>
      <AcceptButton isActive={pay > 0} onClick={handleConfirmPay} />
    </MainFlexContainer>
  );
}

export default RentalCost;
