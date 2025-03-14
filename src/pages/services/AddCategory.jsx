import { useState } from "react";
import AcceptButton from "../../ui/AcceptButton";
import InstructionText from "../../ui/InstructionText";
import MainFlexContainer from "../../ui/MainFlexContainer";
import TextInput from "../../ui/TextInput";
import { useDispatch, useSelector } from "react-redux";
import FadeMessage from "../../ui/FadeMessage";
import { useNavigate } from "react-router-dom";
import { addCategory } from "../../store/slices/serviceSlice";

function AddCategory() {
  const [tempName, setTempName] = useState("");
  const [showFade, setShowFade] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentCategories = useSelector(
    (state) => state.service.categories,
  ).map((e) => e.toLowerCase());

  function handleAcceptCategoryName() {
    if (!tempName) return;
    if (currentCategories.includes(tempName.toLowerCase())) {
      setShowFade(true);
      if (!showFade) setTimeout(() => setShowFade(false), 5000);
      return;
    } else {
      dispatch(addCategory(tempName));
    }
  }

  return (
    <MainFlexContainer back="/services/choose_category">
      <InstructionText text="Name the service category" />
      <TextInput onChange={(e) => setTempName(e.target.value)} />
      <FadeMessage
        text={`${tempName} is already a category.`}
        display={showFade}
      />
      <AcceptButton
        text="Next"
        onClick={handleAcceptCategoryName}
        isActive={tempName.length > 0}
      />
    </MainFlexContainer>
  );
}

export default AddCategory;
