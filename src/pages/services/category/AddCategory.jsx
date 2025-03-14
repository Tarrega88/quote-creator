import { useState } from "react";
import AcceptButton from "../../../ui/AcceptButton";
import InstructionText from "../../../ui/InstructionText";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import TextInput from "../../../ui/TextInput";
import { useDispatch, useSelector } from "react-redux";
import FadeMessage from "../../../ui/FadeMessage";
import { useNavigate } from "react-router-dom";
import {
  addCategory,
  setServiceCategory,
} from "../../../store/slices/serviceSlice";

function AddCategory() {
  const [tempName, setTempName] = useState("");
  const [showFade, setShowFade] = useState(false);
  const [fadeText, setFadeText] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const serviceData = useSelector((state) => state.service);
  const keys = Object.keys(serviceData.services);
  const currentCategories = keys.map((e) => e.toLowerCase());
  // const currentCategories = useSelector(
  //   (state) => state.service.services,
  // ).map((e) => e.toLowerCase());

  function handleAcceptCategoryName() {
    if (!tempName) return;
    if (currentCategories.includes(tempName.toLowerCase())) {
      setFadeText(tempName);
      setShowFade(true);
      if (!showFade) setTimeout(() => setShowFade(false), 5000);
      return;
    } else {
      dispatch(setServiceCategory(tempName));
      dispatch(addCategory(tempName));
      // dispatch(addCategory(tempName));
      //TODO 3/14/2025: navigate to some kind of cost basis page
    }
  }

  return (
    <MainFlexContainer back="/services/add/category">
      <InstructionText text="Name the service category" />
      <TextInput
        onChange={(e) => setTempName(e.target.value)}
        onEnter={handleAcceptCategoryName}
      />
      <FadeMessage
        text={`${fadeText} is already a category.`}
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
