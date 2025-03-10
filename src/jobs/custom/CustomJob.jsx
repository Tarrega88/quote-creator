import { useState } from "react";
import InstructionText from "../../ui/InstructionText";
import SquareButton from "../../ui/SquareButton";
import Subtitle from "../../ui/Subtitle";
import Dropdown from "../../ui/Dropdown";
import { jobTypes } from "../../helpers/jobTypes";
import TextInput from "../../ui/TextInput";
import AcceptButton from "../../ui/AcceptButton";

function CustomJob() {
  const [inputType, setInputType] = useState("textInput");

  function determineInput(inputType) {
    switch (inputType) {
      case "button":
        return (
          <div className="flex justify-center gap-16 pt-2">
            <div className="flex flex-col gap-4">
              <InstructionText text="Choose a job category" />
              <Subtitle text="We can create a new category for this job or add it to an existing category." />
              <div className="flex justify-center gap-16 pt-8">
                <SquareButton
                  text="New Category"
                  onClick={() => setInputType("textInput")}
                />
                <SquareButton
                  text="Existing Category"
                  onClick={() => setInputType("dropdown")}
                />
              </div>
            </div>
          </div>
        );
      case "dropdown":
        return (
          <div className="flex justify-center pt-2">
            <div className="flex flex-col gap-4">
              <InstructionText text="Choose a job category" />
              <Subtitle text="Existing categories:" />
              <Dropdown options={jobTypes.sort()} />
            </div>
          </div>
        );
      case "textInput":
        return (
          <div className="flex justify-center pt-4">
            <div className="flex flex-col items-center gap-6">
              <TextInput />
              <AcceptButton />
            </div>
          </div>
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
