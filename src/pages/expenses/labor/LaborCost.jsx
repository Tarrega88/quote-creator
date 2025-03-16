import { useNavigate, useParams } from "react-router-dom";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import InstructionText from "../../../ui/InstructionText";
import NumberInput from "../../../ui/NumberInput";
import { useState } from "react";
import AcceptButton from "../../../ui/AcceptButton";
import { useDispatch, useSelector } from "react-redux";
import { addToExpenses } from "../../../store/slices/expenseSlice";

function LaborCost() {
  const { paidByThe } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pay, setPay] = useState(0);
  console.log(paidByThe);

  const laborName = useSelector((state) => state.labor.expenseName);

  const expenseToAdd = {
    expenseType: "labor",
    expenseName: laborName,
    costInDollars: pay,
    paidByThe,
  };

  const text =
    paidByThe === "flat"
      ? "What's their flat rate?"
      : `What do they charge per ${paidByThe}?`;

  function handleConfirmPay() {
    if (pay <= 0) return;
    dispatch(addToExpenses(expenseToAdd));
    navigate("/expenses/added");
  }

  return (
    <MainFlexContainer back="/expenses/add/labor/time">
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

export default LaborCost;
