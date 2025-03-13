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

  console.log(laborNames);

  function handleConfirmLaborName() {
    if (laborName.length === 0) return;
    if (laborNames.includes(laborName.toLowerCase())) return;
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
      <AcceptButton
        text="Next"
        isActive={laborName.length > 0}
        onClick={handleConfirmLaborName}
      />
    </MainFlexContainer>
  );
}

export default Labor;
