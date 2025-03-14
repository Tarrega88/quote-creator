import { useState } from "react";
import AcceptButton from "../../../ui/AcceptButton";
import InstructionText from "../../../ui/InstructionText";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import TextInput from "../../../ui/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../../store/slices/laborSlice";
import { useNavigate } from "react-router-dom";
import FadeMessage from "../../../ui/FadeMessage";

function Labor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [laborName, setLaborName] = useState("");
  const [showFade, setShowFade] = useState(false);

  const laborNames = useSelector((state) => state.expense.expenses.labor).map(
    (e) => e.expenseName.toLowerCase(),
  );

  function handleConfirmLaborName() {
    if (laborName.length === 0) return;
    if (laborNames.includes(laborName.toLowerCase())) {
      setShowFade(true);
      if (!showFade) setTimeout(() => setShowFade(false), 5000);
      return;
    }
    dispatch(setName(laborName));
    navigate("/expenses/add/labor/time");
  }

  return (
    <MainFlexContainer back="/expenses/add">
      <InstructionText text="Name the labor expense" />
      <TextInput
        onChange={(e) => setLaborName(e.target.value)}
        onEnter={handleConfirmLaborName}
      />
      <FadeMessage
        text={`There's already a labor expense named ${laborName} - use a different name.`}
        display={showFade}
      />
      <AcceptButton
        text="Next"
        isActive={laborName.length > 0}
        onClick={handleConfirmLaborName}
      />
    </MainFlexContainer>
  );
}

export default Labor;
