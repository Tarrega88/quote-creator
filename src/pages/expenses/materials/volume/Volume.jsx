import { useNavigate } from "react-router-dom";
import MainFlexContainer from "../../../../ui/MainFlexContainer";
import UnitOfVolume from "./UnitOfVolume";

function Volume() {
  const navigate = useNavigate();
  function handleSetVolumeType(type) {
    navigate(`/expenses/add/materials/measurements/volume/${type}`);
  }
  return (
    <MainFlexContainer back="/expenses/add/materials/measurements">
      <UnitOfVolume chooseUnitOfVolume={handleSetVolumeType} />
    </MainFlexContainer>
  );
}

export default Volume;

/*
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

*/
