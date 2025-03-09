import { useState } from "react";
import AddToQuoteButton from "./AddToQuoteButton";
import { useDispatch, useSelector } from "react-redux";
import { setTotal, addJob } from "../quoteSlice";

function PriceRange({ surveyData, min, max, name, labelText }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(min);
  const jobType = useSelector((state) => state.job.jobType);

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
  }

  const test = useSelector((state) => state.quote);
  console.log(test);

  return (
    <div>
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

      <div>Add job to quote</div>
      <AddToQuoteButton text="Add" onClick={addToQuotes} />
    </div>
  );
}

export default PriceRange;
