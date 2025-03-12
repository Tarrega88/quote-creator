import { useState } from "react";
import MainFlexContainer from "../../../../ui/MainFlexContainer";
import UnitOfLength from "./UnitOfLength";
import HowMany from "../HowMany";
import { useNavigate } from "react-router-dom";

function Length() {
  const [lengthType, setLengthType] = useState("");
  const navigate = useNavigate();
  const [back, setBack] = useState("/expenses/add/materials/measurements");

  function handleSetLengthType(type) {
    console.log(type);
    // setLengthType(type);

    navigate(`/expenses/add/materials/measurements/length/${type}`);
  }
  console.log(lengthType);

  // function display() {
  //   switch (lengthType) {
  //     case "":
  //       return <UnitOfLength chooseLength={(e) => handleSetLengthType(e)} />;
  //     default:
  //       return <HowMany measurementType={lengthType} />;
  //   }
  // }

  return (
    <MainFlexContainer back={back}>
      <UnitOfLength chooseLength={(e) => handleSetLengthType(e)} />
    </MainFlexContainer>
  );
}

export default Length;
