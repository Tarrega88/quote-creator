import { useSelector } from "react-redux";
import Dropdown from "../../ui/Dropdown";
import InstructionText from "../../ui/InstructionText";
import MainFlexContainer from "../../ui/MainFlexContainer";
import { useState } from "react";
import AcceptButton from "../../ui/AcceptButton";
import { useNavigate } from "react-router-dom";

function ServiceCategory() {
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  //   const services = useSelector((state) => state.service.services)
  //     .map((e) => e.serviceName)
  //     .sort();

  const categories = useSelector((state) => state.service.categories);
  const sorted = [...categories].sort();

  const options = ["", "Create New Category", ...sorted];

  function handleConfirmCategory() {
    if (!category) return;
    if (category === "Create New Category") {
      navigate("/services/add_category");
    } else {
      //go to the page that asks how this service is charged (time, measurement, flat rate)
    }
  }

  return (
    <MainFlexContainer back="/services">
      <InstructionText text="Select a category or create a new one" />
      <Dropdown
        options={options}
        onChange={(e) => setCategory(e.target.value)}
      />
      <AcceptButton
        text="Next"
        isActive={category.length > 0}
        onClick={handleConfirmCategory}
      />
    </MainFlexContainer>
  );
}

export default ServiceCategory;
