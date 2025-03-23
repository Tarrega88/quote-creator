import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyInfoRow from "./MyInfoRow";
import { setMyInfo } from "../../store/slices/myInfoSlice";
import InstructionText from "../../ui/InstructionText";
import MainFlexContainer from "../../ui/MainFlexContainer";

function MyInfo() {
  const dispatch = useDispatch();
  const { myName, myAddress, myCity, myState, myPhone, myEmail } = useSelector(
    (state) => state.myInfo,
  );
  console.log(myName);

  const myData = {
    Name: myName,
    Address: myAddress,
    City: myCity,
    State: myState,
    Phone: myPhone,
    Email: myEmail,
  };

  function handleSubmit(type, text) {
    console.log(type);
    console.log(text);
    dispatch(setMyInfo({ type, text }));
  }

  return (
    <MainFlexContainer back="/">
      <div className="flex flex-col items-center justify-center pt-12">
        <InstructionText text="Enter your information:" />
        <ul className="flex w-64 flex-col gap-2 pt-8">
          {Object.keys(myData).map((e, i) => (
            <MyInfoRow
              key={i}
              text={myData[e]}
              title={e}
              onSubmit={handleSubmit}
            />
          ))}
        </ul>
      </div>
    </MainFlexContainer>
  );
}

export default MyInfo;
