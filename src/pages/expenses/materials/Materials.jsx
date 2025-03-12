import { useNavigate } from "react-router-dom";
import BackButton from "../../../ui/BackButton";
import Header from "../../../ui/Header";
import InstructionText from "../../../ui/InstructionText";
import TextInput from "../../../ui/TextInput";
import { useState } from "react";
import AcceptButton from "../../../ui/AcceptButton";
import { useDispatch } from "react-redux";
import { setCurrentExpenseName } from "../expenseSlice";
import MainFlexContainer from "../../../ui/MainFlexContainer";

function Materials() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [tempName, setTempName] = useState("");
  const isActive = tempName.length > 0;

  function confirmExpenseName() {
    if (tempName.length === 0) return;
    //TODO 3/11/25: maybe add logic to make sure there's no duplicate
    //might not be necessary though
    //let's also navigate to measurements after this
    dispatch(setCurrentExpenseName(tempName));
    navigate("/expenses/add/materials/measurements");
  }

  return (
    <MainFlexContainer back="/expenses/add">
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
    </MainFlexContainer>
    // <div>
    //   <BackButton onClick={() => navigate("/expenses/add")} />
    //   <div className="flex justify-center">
    //     <div className="flex flex-col items-center gap-4">
    //       <InstructionText text="What is the material called?" />
    //       <TextInput
    //         onChange={(e) => setTempName(e.target.value)}
    //         onEnter={confirmExpenseName}
    //       />
    //       <AcceptButton
    //         text="Next"
    //         isActive={isActive}
    //         onClick={confirmExpenseName}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}

export default Materials;
