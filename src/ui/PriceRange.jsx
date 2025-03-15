import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTotal, addJob } from "../store/slices/quoteSlice";
import InstructionText from "./InstructionText";
import AcceptButton from "./AcceptButton";
import { useNavigate } from "react-router-dom";

function PriceRange({ surveyData, min, max, name, labelText }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(min);
  const jobType = useSelector((state) => state.job.jobType);

  const navigate = useNavigate();

  //        onChange={(e) => dispatch(setJobType(e.target.value))}
  function addToQuotes() {
    dispatch(setTotal(value));
    dispatch(
      addJob({
        jobType: jobType,
        type: surveyData.type,
        cost: value,
      }),
    );
    navigate("/added");
  }

  const test = useSelector((state) => state.quote);

  return (
    <div className="flex flex-col gap-4">
      <div>Current Price: ${value}.00</div>
      <div>{labelText}</div>
      <input
        type="range"
        min={min}
        max={max}
        name={name}
        value={value}
        step={50}
        onChange={(e) => setValue(Number(e.target.value))}
      ></input>

      <InstructionText text="Add job to quote" />
      <div>
        <AcceptButton text="Add" onClick={addToQuotes} />
      </div>
    </div>
  );
}

export default PriceRange;
