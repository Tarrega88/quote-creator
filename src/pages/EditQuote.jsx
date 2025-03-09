import { useState } from "react";
import JobTypeDropdown from "../ui/JobTypeDropdown";
import LandSurvey from "../jobs/LandSurvey/LandSurvey";
import BackButton from "../ui/BackButton";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

//This should check to make sure there's an active customer first from the quoteSlice (grabbed from store).
// If not, it should require the user choose a customer and quote
//

function EditQuote() {
  const [jobType, setJobType] = useState("");
  const navigate = useNavigate();

  function handleBackButton() {
    if (!jobType) {
      navigate("/");
    } //Maybe should bring to existing customer instead?
  }

  const quoteData = useSelector((state) => state.quote);
  const activeCustomer = quoteData.customer;
  const quoteNumber = quoteData.quoteNumber;
  console.log(quoteData);

  console.log(jobType);

  // const jobTypes = [
  //   "",
  //   "Land Survey",
  //   "Land Grading",
  //   "Leveling",
  //   "Installation",
  //   "Soil Removal",
  //   "Dirt Removal",
  // ];

  function jobDisplay(jobType) {
    switch (jobType) {
      case "":
        return (
          <JobTypeDropdown
            onChange={(e) => setJobType(e.target.value)}
            jobType={jobType}
          />
        );
      case "Land Survey":
        return <LandSurvey />;
      case "Land Grading":
        return <div>Land Grading</div>;
      case "Leveling":
        return <div>Leveling</div>;
      case "Installation":
        return <div>Installation</div>;
      case "Soil Removal":
        return <div>Soil Removal</div>;
      case "Dirt Removal":
        return <div>"Dirt Removal</div>;
    }
  }

  return (
    <div>
      <BackButton onClick={handleBackButton} />
      <div>Edit Quote</div>
      <div className="flex justify-center pb-4">
        <div>
          Editing quote {quoteNumber} for {activeCustomer}
        </div>
      </div>
      <div className="flex justify-center">{jobDisplay(jobType)}</div>
    </div>
  );
}

export default EditQuote;
