import { useState } from "react";
import MainFlexContainer from "../../../../ui/MainFlexContainer";
import UnitOfLength from "./UnitOfLength";
import HowMany from "../HowMany";

function Length() {
  const [lengthType, setLengthType] = useState("");
  const [back, setBack] = useState("/expenses/add/materials/measurements");

  function handleSetLengthType(type) {
    setLengthType(type);
  }
  console.log(lengthType);

  function display() {
    switch (lengthType) {
      case "":
        return <UnitOfLength chooseLength={(e) => handleSetLengthType(e)} />;
      default:
        return <HowMany measurementType={lengthType} />;
    }
  }

  return <MainFlexContainer back={back}>{display()}</MainFlexContainer>;
}

export default Length;
