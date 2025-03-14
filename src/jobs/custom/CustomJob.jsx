import { useState } from "react";
import InstructionText from "../../ui/InstructionText";
import SquareButton from "../../ui/SquareButton";
import Subtitle from "../../ui/Subtitle";
import Dropdown from "../../ui/Dropdown";
import { jobTypes } from "../../helpers/jobTypes";
import TextInput from "../../ui/TextInput";
import AcceptButton from "../../ui/AcceptButton";
import MainFlexContainer from "../../ui/MainFlexContainer";
import SquareButtonRow from "../../ui/SquareButtonRow";

function CustomJob() {
  const [inputType, setInputType] = useState("textInput");
  //TODO 3/14/2025: Potentially going to rework, redo, or delete this entire page
  function determineInput(inputType) {
    switch (inputType) {
      case "button":
        return (
          <MainFlexContainer>
            <InstructionText text="Choose a job category" />
            <Subtitle text="We can create a new category for this job or add it to an existing category." />
            <SquareButtonRow>
              <SquareButton
                text="New Category"
                onClick={() => setInputType("textInput")}
              />
              <SquareButton
                text="Existing Category"
                onClick={() => setInputType("dropdown")}
              />
            </SquareButtonRow>
          </MainFlexContainer>
        );
      case "dropdown":
        return (
          <MainFlexContainer>
            <InstructionText text="Choose a job category" />
            <Subtitle text="Existing categories:" />
            <Dropdown options={jobTypes.sort()} />
          </MainFlexContainer>
        );
      case "textInput":
        return (
          <MainFlexContainer>
            <TextInput />
            <AcceptButton />
          </MainFlexContainer>
        );
    }
  }

  return (
    <div>
      <div className="flex flex-col gap-2">{determineInput(inputType)}</div>
    </div>
  );
}

export default CustomJob;
