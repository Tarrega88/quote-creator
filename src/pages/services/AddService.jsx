import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainFlexContainer from "../../ui/MainFlexContainer";
import InstructionText from "../../ui/InstructionText";
import TextInput from "../../ui/TextInput";
import FadeMessage from "../../ui/FadeMessage";
import { useState } from "react";
import AcceptButton from "../../ui/AcceptButton";

function AddService() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showFade, setShowFade] = useState(false);
  const [tempName, setTempName] = useState("");

  //TODO 3/14/2025: should this component be renamed?

  const test = useSelector((state) => state.service);
  console.log(test);

  function handleAcceptServiceName() {}

  return (
    <MainFlexContainer back="/services/choose_category">
      <InstructionText text="What's this service called?" />
      <TextInput onChange={(e) => setTempName(e.target.value)} />
      <FadeMessage
        text={`${tempName} is already a service.`}
        display={showFade}
      />
      <AcceptButton
        text="Next"
        onClick={handleAcceptServiceName}
        isActive={tempName.length > 0}
      />
    </MainFlexContainer>
  );
}

export default AddService;
