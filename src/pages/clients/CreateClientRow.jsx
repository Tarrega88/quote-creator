import { useState } from "react";
import HybridInput from "./HybridInput";
import { useDispatch } from "react-redux";
import { createClient } from "../../store/slices/clientSlice";
import FadeMessage from "../../ui/FadeMessage";

function CreateClientRow({ clientNames }) {
  const dispatch = useDispatch();
  const [inputActive, setInputActive] = useState(false);

  const [tempNewClient, setTempNewClient] = useState("");

  const [showFade, setShowFade] = useState(false);
  const [showNewCustomerFade, setShowNewCustomerFade] = useState(false);
  const [fadeText, setFadeText] = useState(false);

  const lowerCaseClients = clientNames.map((e) => e.toLowerCase());

  function handleCreateNewClient() {
    if (!tempNewClient.length) return;
    if (lowerCaseClients.includes(tempNewClient.toLowerCase())) {
      setFadeText(
        `${tempNewClient} is already a client - please choose a different name.`,
      );
      setShowFade(true);
      if (!showFade) setTimeout(() => setShowFade(false), 5000);
      return;
    }
    setFadeText("Client added!");
    setShowNewCustomerFade(true);
    setTimeout(() => setShowNewCustomerFade(false), 5000);
    dispatch(createClient(tempNewClient));
    setInputActive(false);
  }

  function handleCancelNewClient() {
    setInputActive(false);
  }

  return (
    <div className="flex flex-col">
      <div className="flex h-10 w-full items-center justify-between gap-8 bg-slate-400 px-4">
        {!inputActive ? (
          <button
            onClick={() => setInputActive(true)}
            className="h-4/5 w-36 cursor-pointer bg-green-800 transition-all duration-200 hover:bg-green-700"
          >
            New Client
          </button>
        ) : (
          <>
            <div className="flex h-full items-center gap-4">
              <span>Client Name:</span>
              <HybridInput
                onChange={(e) => setTempNewClient(e.target.value)}
                onEnter={handleCreateNewClient}
              />
            </div>
            <div className="flex h-full items-center gap-8">
              <button
                className="h-4/5 w-24 cursor-pointer bg-green-800 shadow-sm transition-all duration-200 hover:bg-green-700"
                onClick={handleCreateNewClient}
              >
                Done
              </button>
              <button
                onClick={handleCancelNewClient}
                className="h-4/5 w-24 cursor-pointer bg-neutral-600 shadow-sm transition-all duration-200 hover:bg-neutral-500"
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
      <div className="flex h-10 w-full items-center justify-between gap-8 bg-slate-500 px-4">
        {inputActive ? (
          <FadeMessage text={fadeText} display={showFade} />
        ) : (
          <FadeMessage text={fadeText} display={showNewCustomerFade} />
        )}
      </div>
    </div>
  );
}

export default CreateClientRow;
