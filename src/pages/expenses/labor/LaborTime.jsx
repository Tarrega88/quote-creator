import { useNavigate } from "react-router-dom";
import InstructionText from "../../../ui/InstructionText";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import SquareButton from "../../../ui/SquareButton";
import { useDispatch } from "react-redux";
import { setTimeType } from "../../../store/slices/laborSlice";
import SquareButtonRow from "../../../ui/SquareButtonRow";

function LaborTime() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleNav(time) {
    dispatch(setTimeType(time));
    navigate(`/expenses/add/labor/time/${time}`);
  }

  return (
    <MainFlexContainer back="/expenses/add/labor">
      <InstructionText text="This labor is paid by the..." />
      <SquareButtonRow>
        <SquareButton text="Hour" onClick={() => handleNav("hour")} />
        <SquareButton text="Day" onClick={() => handleNav("day")} />
        <SquareButton text="Flat Rate" onClick={() => handleNav("flat")} />
      </SquareButtonRow>
    </MainFlexContainer>
  );
}

export default LaborTime;
