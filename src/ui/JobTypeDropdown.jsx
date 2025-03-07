// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJobType } from "../jobs/jobSlice";
import LandSurvey from "../jobs/LandSurvey";

function JobTypeDropdown() {
    const dispatch = useDispatch();
    const jobType = useSelector((state) => state.job.jobType);
    const jobTypes = ["","Land Survey", "Land Grading", "Leveling", "Installation", "Soil Removal", "Dirt Removal"];

console.log(jobType);

//for now just going to throw LandSurvey in here to test:

  return (
    <div>
      <select className="bg-slate-700 w-full" onChange={(e) => dispatch(setJobType(e.target.value))}>
        {jobTypes.map((job, i) => <option key={i}>{job}</option>)}
      </select>
      {jobType === "Land Survey" && <LandSurvey />}
    </div>
  );
}

export default JobTypeDropdown;