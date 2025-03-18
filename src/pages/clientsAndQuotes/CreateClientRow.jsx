import { useState } from "react";
import TextInput from "../../ui/TextInput";
import HybridInput from "./HybridInput";
import AcceptButton from "../../ui/AcceptButton";

function CreateClientRow() {
  const [inputActive, setInputActive] = useState(false);
  const [buttonText, setButtonText] = useState("New Client");

  const [tempNewClient, setTempNewClient] = useState("");

  const [showFade, setShowFade] = useState(false);

  function handleCreateNewClient() {
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
            {buttonText}
          </button>
        ) : (
          <>
            <div className="flex h-full items-center gap-4">
              <span>Client Name:</span>
              <HybridInput onChange={(e) => setTempNewClient(e.target.value)} />
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
        {showFade && (
          <div>
            {tempNewClient} is already a client. Choose a different name.
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateClientRow;
