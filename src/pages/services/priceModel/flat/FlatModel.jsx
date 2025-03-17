import { useDispatch, useSelector } from "react-redux";
import InstructionText from "../../../../ui/InstructionText";
import MainFlexContainer from "../../../../ui/MainFlexContainer";
import { useState } from "react";
import NumberInput from "../../../../ui/NumberInput";
import AcceptButton from "../../../../ui/AcceptButton";
import { useNavigate } from "react-router-dom";
import { addService } from "../../../../store/slices/serviceSlice";

function FlatModel() {
  const { serviceName, serviceCategory } = useSelector(
    (state) => state.service.current,
  );

  const [pay, setPay] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dataToAdd = {
    serviceName,
    serviceCategory,
    paymentModel: "flat",
    pay,
  };

  function handleSubmit() {
    if (pay <= 0) return;
    dispatch(addService(dataToAdd));
    //TODO: change navigate to service added
    navigate("/services/added");
  }

  return (
    <MainFlexContainer back="/services/add/price_model">
      <InstructionText text={`What do you charge for ${serviceName}?`} />
      <div className="flex gap-2">
        <span>I charge a flat rate of</span>
        <NumberInput
          onChange={(e) => setPay(Number(e.target.value))}
          onEnter={handleSubmit}
        />
        <span>dollars</span>
      </div>
      <AcceptButton isActive={pay > 0} onClick={handleSubmit} />
    </MainFlexContainer>
  );
}

export default FlatModel;
