import AcceptButton from "../../../ui/AcceptButton";
import InstructionText from "../../../ui/InstructionText";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import Subtitle from "../../../ui/Subtitle";
import TextInput from "../../../ui/TextInput";

function Labor() {
  return (
    <MainFlexContainer back="/expenses/add">
      <InstructionText text="Name the labor expense" />
      <TextInput />
      <AcceptButton />
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
