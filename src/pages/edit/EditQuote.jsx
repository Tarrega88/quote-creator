import { useState } from "react";
import JobTypeDropdown from "../../ui/JobTypeDropdown";
import LandSurvey from "../../jobs/LandSurvey/LandSurvey";
import BackButton from "../../ui/BackButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import InstructionText from "../../ui/InstructionText";
import SquareButton from "../../ui/SquareButton";
import Subtitle from "../../ui/Subtitle";
import CustomJob from "../../jobs/custom/CustomJob";
import SquareButtonRow from "../../ui/SquareButtonRow";

//This should check to make sure there's an active client first from the quoteSlice (grabbed from store).
// If not, it should require the user choose a client and quote
//

//TODO 3/14/2025: Potentially going to redo this page

function EditQuote() {
  const [jobType, setJobType] = useState("");
  // const [client, setClient] = useState("");

  // const dispatch = useDispatch();

  //TODO 3/9/2025: Consider making the Edit button for the "or update" section take you to the Client list
  //If that's the change then the instructional text should change a bit too

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleBackButton() {
    if (!jobType) {
      navigate("/quotes");
      return;
      //should add logic for when user reaches /edit through no client Edit instead of through New
    } //Maybe should bring to existing client instead?
    setJobType("");
  }

  const quoteData = useSelector((state) => state.quote);
  const activeClient = quoteData.client;

  const clientData = useSelector((state) => state.client.clients);

  const quoteNumber = clientData[activeClient]?.length;

  const clientNames = Object.keys(clientData);

  function handleViewClients() {
    navigate("/clients");
  }

  function handleNew() {
    navigate("/quotes/create");
  }

  // function submitClient() {
  //   if (!client.length) return;
  // }

  // console.log(client);

  function jobDisplay(jobType) {
    switch (jobType) {
      case "":
        return (
          <JobTypeDropdown
            onChange={(e) => setJobType(e.target.value)}
            jobType={jobType}
          />
        );
      case "Custom":
        return <CustomJob />;
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
        return <div>Dirt Removal</div>;
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
          <div className="min-w-40">
            <Subtitle text="Would you like to create a new quote or view your list of clients to update an old quote?" />
          </div>
          {/* <InstructionText text="Want to create a new quote" />
          <InstructionText text="or update an old one?" /> */}
          <SquareButtonRow>
            <SquareButton text="New" onClick={handleNew} />
            <SquareButton text="View Clients" onClick={handleViewClients} />
          </SquareButtonRow>
          {/*should take us to a list of customers*/}
        </div>
      )}
    </div>
  );
}

export default EditQuote;
