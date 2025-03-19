import { useState } from "react";
import HybridInput from "./HybridInput";
import { useDispatch } from "react-redux";
import { createClient } from "../../../store/slices/clientSlice";
import FadeMessage from "../../../ui/FadeMessage";
import MainRow from "./MainRow";
import CreateClientInputRow from "./CreateClientInputRow";

function CreateClientRow({
  clientNames,
  displayMode,
  setDisplayMode,
  setSearchText,
}) {
  const dispatch = useDispatch();

  const [tempNewClient, setTempNewClient] = useState("");

  const [showFade, setShowFade] = useState(false);
  const [showNewCustomerFade, setShowNewCustomerFade] = useState(false);
  const [fadeText, setFadeText] = useState(false);

  const lowerCaseClients = clientNames.map((e) => e.toLowerCase());

  console.log(lowerCaseClients);

  const regex = /^[a-zA-Z0-9 ]+$/;
  const spaceRegex = /^(?!.*\s{2,})/; // Checks if there are consecutive spaces

  /*
  ^[a-zA-Z0-9 ]+$

  */

  function handleCreateNewClient() {
    if (!tempNewClient.length) return;
    if (!regex.test(tempNewClient)) {
      setFadeText("Use only letters, spaces, and numbers");
      setShowFade(true);
      if (!showFade) setTimeout(() => setShowFade(false), 5000);
      return;
    }
    // if (!spaceRegex.test(tempNewClient)) {
    //   setFadeText("Please use one space per word");
    //   setShowFade(true);
    //   if (!showFade) setTimeout(() => setShowFade(false), 5000);
    //   return;
    // }
    if (lowerCaseClients.includes(tempNewClient.toLowerCase().trim())) {
      setFadeText(`${tempNewClient} is already a client.`);
      setShowFade(true);
      if (!showFade) setTimeout(() => setShowFade(false), 5000);
      return;
    }
    setFadeText("Client added!");
    setShowNewCustomerFade(true);
    setTimeout(() => setShowNewCustomerFade(false), 5000);
    dispatch(createClient(tempNewClient.trim()));
    setDisplayMode("main");
  }

  function handleCancel() {
    setDisplayMode("main");
  }

  const display = {
    main: (
      <MainRow
        setDisplayMode={setDisplayMode}
        fadeText={fadeText}
        showNewCustomerFade={showNewCustomerFade}
      />
    ),
    newClient: (
      <CreateClientInputRow
        setTempNewClient={setTempNewClient}
        handleCreateNewClient={handleCreateNewClient}
        handleCancel={handleCancel}
        fadeText={fadeText}
        showFade={showFade}
      />
    ),
    searchClients: (
      <div className="grid h-12 grid-cols-2 bg-slate-400 px-4">
        <div className="flex items-center gap-4">
          <span>Search:</span>
          <HybridInput onChange={(e) => setSearchText(e.target.value)} />
        </div>
        <div className="flex items-center justify-end">
          <button
            onClick={handleCancel}
            className="h-4/5 w-24 cursor-pointer bg-neutral-600 shadow-sm transition-all duration-200 hover:bg-neutral-500"
          >
            Cancel
          </button>
        </div>
      </div>
    ),
  };

  return display[displayMode];
}

export default CreateClientRow;
