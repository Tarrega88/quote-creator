import { useNavigate, useParams } from "react-router-dom";
import MainFlexContainer from "../../../../ui/MainFlexContainer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NumberInput from "../../../../ui/NumberInput";
import InstructionText from "../../../../ui/InstructionText";
import AcceptButton from "../../../../ui/AcceptButton";

function CostByMeasurement() {
  const { measurementType, measurementUnit } = useParams();

  const serviceName = useSelector((state) => state.service.current.serviceName);
  console.log(serviceName);
  const [pay, setPay] = useState(0);
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit() {
    if (pay <= 0 || amount <= 0) return;
  }

  return (
    <MainFlexContainer
      back={`/services/add/price_model/measurement/${measurementType}`}
    >
      <InstructionText text={`What do you charge for ${serviceName}`} />
      <div className="flex gap-2">
        <span>I charge</span>
        <NumberInput
          onChange={(e) => setPay(Number(e.target.value))}
          onEnter={handleSubmit}
        />
        <span>dollars per</span>
        <NumberInput
          onChange={(e) => setAmount(Number(e.target.value))}
          onEnter={handleSubmit}
        />
        <span>{measurementUnit}</span>
      </div>
      <AcceptButton isActive={pay > 0 && amount > 0} onClick={handleSubmit} />
    </MainFlexContainer>
  );
}

export default CostByMeasurement;
