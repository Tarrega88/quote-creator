import { useNavigate } from "react-router-dom";
import BackButton from "../../../ui/BackButton";
import InstructionText from "../../../ui/InstructionText";
import { useState } from "react";
import AcceptButton from "../../../ui/AcceptButton";
import FadeMessage from "../../../ui/FadeMessage";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../../ui/TextInput";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import { setRentalName } from "../../../store/slices/rentalSlice";

function Rentals() {
  const [tempName, setTempName] = useState("");
  const [showFade, setShowFade] = useState(false);
  const [fadeText, setFadeText] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const rentalData = useSelector((state) => state.expense.expenses.rentals);

  const currentRentals = Object.keys(rentalData).map((e) => e.toLowerCase());

  function handleConfirmRentalName() {
    if (tempName.length === 0) return;
    if (currentRentals.includes(tempName.toLowerCase())) {
      setFadeText(tempName);
      setShowFade(true);
      if (!showFade) setTimeout(() => setShowFade(false), 5000);
      return;
    }

    dispatch(setRentalName(tempName));
    navigate("/expenses/add/rentals/time");
  }

  return (
    <MainFlexContainer back="/expenses/add">
      <InstructionText text="Name the rental expense" />
      <TextInput
        onChange={(e) => setTempName(e.target.value)}
        onEnter={handleConfirmRentalName}
      />
      <FadeMessage
        text={`There's already a rental expense named ${fadeText} - use a different name.`}
        display={showFade}
      />
      <AcceptButton
        text="Next"
        isActive={tempName.length > 0}
        onClick={handleConfirmRentalName}
      />
    </MainFlexContainer>
  );
}

export default Rentals;
