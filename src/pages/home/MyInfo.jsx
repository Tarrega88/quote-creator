import { useDispatch, useSelector } from "react-redux";
import MyInfoRow from "./MyInfoRow";
import { setMyInfo } from "../../store/slices/myInfoSlice";
import InstructionText from "../../ui/InstructionText";
import MainFlexContainer from "../../ui/MainFlexContainer";
import Subtitle from "../../ui/Subtitle";
import ImageDropZone from "./ImageDropZone";

function MyInfo() {
  const dispatch = useDispatch();
  const {
    myName,
    myAddress,
    myCity,
    myState,
    myPhone,
    myEmail,
    myCompany,
    myImage,
  } = useSelector((state) => state.myInfo);

  const myData = {
    Name: myName,
    Company: myCompany,
    Address: myAddress,
    City: myCity,
    State: myState,
    Phone: myPhone,
    Email: myEmail,
  };

  function handleSubmit(type, text) {
    dispatch(setMyInfo({ type, text }));
  }

  return (
    <MainFlexContainer back="/">
      <InstructionText text="Enter your information:" />
      <Subtitle text="Any information entered here will show up on the quote." />
      <Subtitle text="Enter only what you want to share with the customer." />

      <ul className="flex w-dvw flex-col items-center gap-2 pt-8">
        {Object.keys(myData).map((e, i) => (
          <MyInfoRow
            key={i}
            text={myData[e]}
            title={e}
            onSubmit={handleSubmit}
          />
        ))}
      </ul>
      <ImageDropZone />
      {myImage && (
        <img
          src={myImage}
          alt="Uploaded"
          className="mt-4 h-32 border object-contain"
        />
      )}
    </MainFlexContainer>
  );
}

export default MyInfo;
