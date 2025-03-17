import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainFlexContainer from "../../ui/MainFlexContainer";
import InstructionText from "../../ui/InstructionText";
import TextInput from "../../ui/TextInput";
import FadeMessage from "../../ui/FadeMessage";
import { useState } from "react";
import AcceptButton from "../../ui/AcceptButton";
import { setServiceName } from "../../store/slices/serviceSlice";

function AddService() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showFade, setShowFade] = useState(false);
  const [tempName, setTempName] = useState("");

  const servicesData = useSelector((state) => state.service);
  console.log(servicesData);

  const serviceNameData = useSelector((state) => state.service.allServiceNames);
  const serviceNames = Object.keys(serviceNameData).map((e) => e.toLowerCase());

  function handleAcceptServiceName() {
    if (!tempName) return;
    if (serviceNames.includes(tempName.toLowerCase())) {
      setShowFade(true);
      if (!showFade) setTimeout(() => setShowFade(false), 5000);
      return;
    } else {
      dispatch(setServiceName(tempName));
      navigate("/services/add/category/");
    }
  }

  return (
    <MainFlexContainer back="/services">
      <InstructionText text="What's this service called?" />
      <TextInput
        onChange={(e) => setTempName(e.target.value)}
        onEnter={handleAcceptServiceName}
      />
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
