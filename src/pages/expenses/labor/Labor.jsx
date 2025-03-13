import { useState } from "react";
import AcceptButton from "../../../ui/AcceptButton";
import InstructionText from "../../../ui/InstructionText";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import TextInput from "../../../ui/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../../store/slices/laborSlice";
import { useNavigate } from "react-router-dom";

function Labor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [laborName, setLaborName] = useState("");

  const laborNames = useSelector((state) => state.expense.expenses.labor).map(
    (e) => e.name.toLowerCase(),
  );

  function handleConfirmLaborName() {
    if (laborName.length === 0) return;
    if (laborNames.include(laborName.toLowerCase())) return;
    dispatch(setName(laborName));
  }

  return (
    <MainFlexContainer back="/expenses/add">
      <InstructionText text="Name the labor expense" />
      <TextInput
        onChange={(e) => setLaborName(e.target.value)}
        onEnter={handleConfirmLaborName}
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

{
  /*    <MainFlexContainer back="/expenses/add">
      <InstructionText text="What is the material called?" />
      <TextInput
        onChange={(e) => setTempName(e.target.value)}
        onEnter={confirmExpenseName}
      />
      <AcceptButton
        text="Next"
        isActive={isActive}
        onClick={confirmExpenseName}
      />
    </MainFlexContainer>*/
}
