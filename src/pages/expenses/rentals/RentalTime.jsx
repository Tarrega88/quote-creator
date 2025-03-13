import { useNavigate } from "react-router-dom";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import { useDispatch } from "react-redux";
import { setRentalTimeType } from "../../../store/slices/rentalSlice";
import InstructionText from "../../../ui/InstructionText";
import SquareButton from "../../../ui/SquareButton";

function RentalTime() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleNav(time) {
    dispatch(setRentalTimeType(time));
    navigate(`/expenses/add/rentals/time/${time}`);
  }

  return (
    <MainFlexContainer back="/expenses/add/rentals">
      <InstructionText text="This rental is paid by the..." />
      <div className="flex gap-8">
        <SquareButton text="Hour" onClick={() => handleNav("hour")} />
        <SquareButton text="Day" onClick={() => handleNav("day")} />
        <SquareButton text="Flat Rate" onClick={() => handleNav("flat")} />
      </div>
    </MainFlexContainer>
  );
}

export default RentalTime;
