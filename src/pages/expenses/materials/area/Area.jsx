import { useNavigate } from "react-router-dom";
import MainFlexContainer from "../../../../ui/MainFlexContainer";
import UnitOfArea from "./UnitOfArea";

function Area() {
  const navigate = useNavigate();
  function handleSetAreaType(type) {
    navigate(`/expenses/add/materials/measurements/length/${type}`);
  }
  return (
    <MainFlexContainer back="/expenses/add/materials/measurements">
      <UnitOfArea chooseUnitOfArea={handleSetAreaType} />
    </MainFlexContainer>
  );
}

export default Area;
