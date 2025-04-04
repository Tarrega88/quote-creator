import { useNavigate } from "react-router-dom";
import InstructionText from "../../../ui/InstructionText";
import TextInput from "../../../ui/TextInput";
import { useState } from "react";
import AcceptButton from "../../../ui/AcceptButton";
import { useDispatch, useSelector } from "react-redux";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import { setMaterialName } from "../../../store/slices/materialSlice";
import FadeMessage from "../../../ui/FadeMessage";

function Materials() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [tempName, setTempName] = useState("");
  const isActive = tempName.length > 0;

  const [showFade, setShowFade] = useState(false);
  const [fadeText, setFadeText] = useState("");

  const materialData = useSelector((state) => state.expense.expenses.materials);
  const currentMaterials = Object.keys(materialData).map((e) =>
    e.toLowerCase(),
  );

  function confirmExpenseName() {
    if (tempName.length === 0) return;
    if (currentMaterials.includes(tempName.toLowerCase())) {
      setFadeText(tempName);
      setShowFade(true);
      if (!showFade) setTimeout(() => setShowFade(false), 5000);
      return;
    }

    // dispatch(setCurrentExpenseName(tempName));
    dispatch(setMaterialName(tempName));
    navigate("/expenses/add/materials/measurements");
  }

  return (
    <MainFlexContainer back="/expenses/add">
      <InstructionText text="What is the material called?" />
      <TextInput
        onChange={(e) => setTempName(e.target.value)}
        onEnter={confirmExpenseName}
      />
      <FadeMessage
        text={`${fadeText} has already been used, please use a different name`}
        display={showFade}
      />
      <AcceptButton
        text="Next"
        isActive={isActive}
        onClick={confirmExpenseName}
      />
    </MainFlexContainer>
  );
}

export default Materials;
