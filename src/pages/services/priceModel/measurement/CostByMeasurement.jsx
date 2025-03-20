import { useNavigate, useParams } from "react-router-dom";
import MainFlexContainer from "../../../../ui/MainFlexContainer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NumberInput from "../../../../ui/NumberInput";
import InstructionText from "../../../../ui/InstructionText";
import AcceptButton from "../../../../ui/AcceptButton";
import { addService } from "../../../../store/slices/serviceSlice";

function CostByMeasurement() {
  const { measurementType, measurementUnit } = useParams();
  //TODO 3/16/2025: Check to make sure this still works

  const { serviceName, serviceCategory } = useSelector(
    (state) => state.service.current,
  );
  const [pay, setPay] = useState(0);
  const [unitAmount, setUnitAmount] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //name, pay, amount, price model, measurement type, measurement unit

  const dataToAdd = {
    serviceCategory,
    serviceName,
    paymentModel: "measurement",
    pay,
    unitAmount,
    measurementType,
    measurementUnit,
  };

  function handleSubmit() {
    if (pay <= 0 || unitAmount <= 0) return;
    //TODO: need to add more checks and navigate somewhere else
    dispatch(addService(dataToAdd));
    navigate("/services/added");
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
          onChange={(e) => setUnitAmount(Number(e.target.value))}
          onEnter={handleSubmit}
        />
        <span>{measurementUnit.replaceAll("_", " ")}</span>
      </div>
      <AcceptButton
        isActive={pay > 0 && unitAmount > 0}
        onClick={handleSubmit}
      />
    </MainFlexContainer>
  );
}

export default CostByMeasurement;
