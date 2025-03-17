import { useNavigate, useParams } from "react-router-dom";
import MainFlexContainer from "../../../../ui/MainFlexContainer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InstructionText from "../../../../ui/InstructionText";
import NumberInput from "../../../../ui/NumberInput";
import AcceptButton from "../../../../ui/AcceptButton";
import { addService } from "../../../../store/slices/serviceSlice";

function TimePay() {
  const { timeUnit } = useParams();
  const [pay, setPay] = useState(0);
  const [unitAmount, setUnitAmount] = useState(0);
  const { serviceCategory, serviceName } = useSelector(
    (state) => state.service.current,
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dataToAdd = {
    serviceCategory,
    serviceName,
    paymentModel: "time",
    pay,
    unitAmount,
    timeUnit,
  };

  function handleSubmit() {
    if (pay <= 0 || amount <= 0) return;

    dispatch(addService(dataToAdd));
    //TODO 3/16/2025: navigate elsewhere besides home
    navigate("/");
  }

  return (
    <MainFlexContainer back="/services/add/price_model/time">
      <InstructionText text={`What do you charge for ${serviceName}`} />
      <div className="flex gap-2">
        <span>I charge</span>
        <NumberInput onChange={(e) => setPay(Number(e.target.value))} />
        <span>dollars per</span>
        <NumberInput onChange={(e) => setUnitAmount(Number(e.target.value))} />
        <span>{timeUnit}s</span>
      </div>
      <AcceptButton isActive={pay > 0 && amount > 0} onClick={handleSubmit} />
    </MainFlexContainer>
  );
}
export default TimePay;
