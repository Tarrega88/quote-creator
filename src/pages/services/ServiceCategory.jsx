import { useSelector } from "react-redux";
import Dropdown from "../../ui/Dropdown";
import InstructionText from "../../ui/InstructionText";
import MainFlexContainer from "../../ui/MainFlexContainer";
import { useState } from "react";
import AcceptButton from "../../ui/AcceptButton";

function ServiceCategory() {
  const [category, setCategory] = useState("");

  const services = useSelector((state) => state.service.services).map(
    (e) => e.serviceName,
  );

  const options = ["", "Create New Category", ...services];

  function handleConfirmCategory() {}

  return (
    <MainFlexContainer back="/services">
      <InstructionText text="Select a category or select Create New Category" />
      <Dropdown
        options={options}
        onChange={(e) => setCategory(e.target.value)}
      />
      <AcceptButton text="Next" />
    </MainFlexContainer>
  );
}

export default ServiceCategory;
