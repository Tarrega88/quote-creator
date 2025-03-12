import { useState } from "react";
import MainFlexContainer from "../../../../ui/MainFlexContainer";
import UnitOfMeasurement from "./UnitOfLength";
import UnitOfLength from "./UnitOfLength";

function Length() {
  const [lengthType, setLengthType] = useState("");

  function handleSetLengthType() {}
  return (
    <MainFlexContainer back="/expenses/add/materials/measurements">
      <UnitOfLength onClick={handleSetLengthType} />
    </MainFlexContainer>
  );
}

export default Length;
