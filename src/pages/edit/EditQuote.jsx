import { useState } from "react";
import JobTypeDropdown from "../../ui/JobTypeDropdown";
import LandSurvey from "../../jobs/LandSurvey/LandSurvey";
import BackButton from "../../ui/BackButton";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import InstructionText from "../../ui/InstructionText";
import SquareButton from "../../ui/SquareButton";

//This should check to make sure there's an active client first from the quoteSlice (grabbed from store).
// If not, it should require the user choose a client and quote
//

function EditQuote() {
  const [jobType, setJobType] = useState("");
  // const [client, setClient] = useState("");

  // const dispatch = useDispatch();

  //TODO 3/9/2025: Consider making the Edit button for the "or update" section take you to the Client list
  //If that's the change then the instructional text should change a bit too

  const navigate = useNavigate();

  function handleBackButton() {
    if (!jobType) {
      navigate("/");
      //should add logic for when user reaches /edit through no client Edit instead of through New
    } //Maybe should bring to existing client instead?
  }

  const quoteData = useSelector((state) => state.quote);
  const activeClient = quoteData.client;
  const quoteNumber = quoteData.quoteNumber;

  const clientData = useSelector((state) => state.client.clients);

  const clientNames = Object.keys(clientData);

  // function submitClient() {
  //   if (!client.length) return;
  // }

  // console.log(client);

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
