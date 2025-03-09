import { useState } from "react";
import JobTypeDropdown from "../../ui/JobTypeDropdown";
import LandSurvey from "../../jobs/LandSurvey/LandSurvey";
import BackButton from "../../ui/BackButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import InstructionText from "../../ui/InstructionText";
import SquareButton from "../../ui/SquareButton";
import Dropdown from "../../ui/Dropdown";
import AcceptButton from "../../ui/AcceptButton";
import { createQuote } from "../../quoteSlice";

//This should check to make sure there's an active client first from the quoteSlice (grabbed from store).
// If not, it should require the user choose a client and quote
//

function EditQuote() {
  const [jobType, setJobType] = useState("");
  const [client, setClient] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleBackButton() {
    if (!jobType) {
      navigate("/");
    } //Maybe should bring to existing client instead?
  }

  const quoteData = useSelector((state) => state.quote);
  const activeClient = quoteData.client;
  const quoteNumber = quoteData.quoteNumber;
  console.log(quoteData);

  console.log(jobType);

  const clientData = useSelector((state) => state.client.clients);

  const clientNames = Object.keys(clientData);

  function submitClient() {
    if (!client.length) return;
  }

  console.log(client);

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
      {activeClient ? (
        <div>
          <div className="flex justify-center pb-4">
            <div>
              Editing quote {quoteNumber} for {activeClient}
            </div>
          </div>
          <div className="flex justify-center">{jobDisplay(jobType)}</div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 px-4">
          <InstructionText text="No quote active" />
          <InstructionText text="Want to create a new quote" />
          <InstructionText text="or update an old one?" />
          <div className="flex justify-center gap-12 pt-4">
            <SquareButton text="New" onClick={() => navigate("/create")} />
            <SquareButton text="Edit" />
            {/*should take us to a list of customers*/}
          </div>
        </div>
      )}
    </div>
  );
}

export default EditQuote;
