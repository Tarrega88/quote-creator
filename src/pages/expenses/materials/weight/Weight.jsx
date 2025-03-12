import { useNavigate } from "react-router-dom";
import MainFlexContainer from "../../../../ui/MainFlexContainer";
import UnitOfWeight from "./UnitOfWeight";

function Weight() {
  const navigate = useNavigate();
  function handleSetWeightType(type) {
    navigate(`/expenses/add/materials/measurements/weight/${type}`);
  }

  return (
    <MainFlexContainer back="/expenses/add/materials/measurements">
      <UnitOfWeight chooseUnitOfWeight={handleSetWeightType} />
    </MainFlexContainer>
  );
}

export default Weight;
